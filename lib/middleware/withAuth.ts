import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import logger, { Logger } from '../logger';
import { MiddlewareFactory } from './stackMiddlewares';
import configuration from '@/configuration.mjs';
import { withBasePath } from '..';
import { cookies } from 'next/headers'

logger.setLevel(Logger.Levels.INFO)

export const withAuth: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const authorization = cookies().get('Authorization')?.value
        logger.debug("withAuth Authorization", authorization)
        logger.debug("request.nextUrl.pathname", request.nextUrl.pathname)

        // 如果配置中没有认证路径，则直接跳过
        if (configuration.PathAuth == undefined) return next(request, _next);
        // 如果配置中没有认证路径的正则，则直接跳过
        if (configuration.PathAuth.Pattern == undefined) return next(request, _next);

        //如果请求路径匹配认证路径的正则，并且不是登录页，则重定向到登录页
        if ((configuration.PathAuth.Pattern as RegExp).test(request.nextUrl.pathname) && configuration.PathAuth.Login != request.nextUrl.pathname) {
            if (!authorization)
                return redirectAuthLogin(request)
        }
        return next(request, _next);
    };
};
/**
 * 重定向登录页
 */
const redirectAuthLogin = (request: NextRequest) => {
    const loginUrl = new URL(withBasePath(configuration.PathAuth.Login), request.nextUrl.origin)
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
}


