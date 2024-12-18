import { Menu } from '@/lib/menu';

/**
 * 模板页面菜单树结构
 */
export const TemplateMenuTree: Menu[] = [
  // dashboard
  {
    menuType: 'M',
    menuKey: 'dashboard',
    children: [
      {
        menuType: 'C',
        menuKey: 'sales',
        path: '/template/index',
        icon: 'menu-template-sales',
      },
      {
        menuType: 'C',
        menuKey: 'analytics',
        path: '/template/analytics',
        icon: 'menu-template-analytics',
      },
      {
        menuType: 'C',
        menuKey: 'finance',
        path: '/template/finance',
        icon: 'menu-template-finance',
      },
      {
        menuType: 'C',
        menuKey: 'crypto',
        path: '/template/crypto',
        icon: 'menu-template-crypto',
      },
    ]
  },
  // Apps
  {
    menuType: 'M',
    menuKey: 'apps',
    children: [
      {
        menuType: 'C',
        menuKey: 'chat',
        path: '/template/apps/chat',
        icon: 'menu-template-chat',
      },
      {
        menuType: 'C',
        menuKey: 'mailbox',
        path: '/template/apps/mailbox',
        icon: 'menu-template-mailbox',
      },
      {
        menuType: 'C',
        menuKey: 'todolist',
        path: '/template/apps/todolist',
        icon: 'menu-template-todolist',
      },
      {
        menuType: 'C',
        menuKey: 'notes',
        path: '/template/apps/notes',
        icon: 'menu-template-notes',
      },
      {
        menuType: 'C',
        menuKey: 'scrumboard',
        path: '/template/apps/scrumboard',
        icon: 'menu-template-scrumboard',
      },
      {
        menuType: 'C',
        menuKey: 'contacts',
        path: '/template/apps/contacts',
        icon: 'menu-template-contacts',
      },
      {
        menuType: 'C',
        menuKey: 'invoice',
        icon: 'menu-template-invoice',
        children: [
          {
            menuType: 'C',
            parentKey: 'invoice',
            menuKey: 'list',
            path: '/template/apps/invoice/list'
          },
          {
            menuType: 'C',
            parentKey: 'invoice',
            menuKey: 'preview',
            path: '/template/apps/invoice/preview'
          },
          {
            menuType: 'C',
            parentKey: 'invoice',
            menuKey: 'add',
            path: '/template/apps/invoice/add'
          },
          {
            menuType: 'C',
            parentKey: 'invoice',
            menuKey: 'edit',
            path: '/template/apps/invoice/edit'
          }
        ]
      },
      {
        menuType: 'C',
        menuKey: 'calendar',
        path: '/template/apps/calendar',
        icon: 'menu-template-calendar',
      },
    ]
  },
  // User Interface
  {
    menuType: 'M',
    menuKey: 'user_interface',
    children: [
      {
        menuType: 'C',
        menuKey: 'components',
        icon: 'menu-template-components',
        children: [
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'tabs',
            path: '/template/components/tabs'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'accordions',
            path: '/template/components/accordions'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'modals',
            path: '/template/components/modals'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'cards',
            path: '/template/components/cards'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'carousel',
            path: '/template/components/carousel'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'countdown',
            path: '/template/components/countdown'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'counter',
            path: '/template/components/counter'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'sweetalert',
            path: '/template/components/sweetalert'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'timeline',
            path: '/template/components/timeline'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'notifications',
            path: '/template/components/notifications'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'media_object',
            path: '/template/components/media-object'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'list_group',
            path: '/template/components/list-group'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'pricing_table',
            path: '/template/components/pricing-table'
          },
          {
            menuType: 'C',
            parentKey: 'components',
            menuKey: 'lightbox',
            path: '/template/components/lightbox'
          },
        ]
      },
      {
        menuType: 'C',
        menuKey: 'elements',
        icon: 'menu-template-elements',
        children: [
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'alerts',
            path: '/template/elements/alerts'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'avatar',
            path: '/template/elements/avatar'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'badges',
            path: '/template/elements/badges'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'breadcrumbs',
            path: '/template/elements/breadcrumbs'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'buttons',
            path: '/template/elements/buttons'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'button_groups',
            path: '/template/elements/button-groups'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'color_library',
            path: '/template/elements/color-library'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'dropdown',
            path: '/template/elements/dropdown'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'infobox',
            path: '/template/elements/infobox'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'jumbotron',
            path: '/template/elements/jumbotron'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'loader',
            path: '/template/elements/loader'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'pagination',
            path: '/template/elements/pagination'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'popovers',
            path: '/template/elements/popovers'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'progress_bar',
            path: '/template/elements/progress-bar'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'search',
            path: '/template/elements/search'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'tooltips',
            path: '/template/elements/tooltips'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'treeview',
            path: '/template/elements/treeview'
          },
          {
            menuType: 'C',
            parentKey: 'elements',
            menuKey: 'typography',
            path: '/template/elements/typography'
          },
        ]
      },
      {
        menuType: 'C',
        menuKey: 'more',
        icon: 'menu-template-more',
        children: [
          {
            menuType: 'C',
            parentKey: 'more',
            menuKey: 'charts',
            path: '/template/more/charts'
          },
          {
            menuType: 'C',
            parentKey: 'more',
            menuKey: 'font_icons',
            path: '/template/more/font-icons'
          },
          {
            menuType: 'C',
            parentKey: 'more',
            menuKey: 'drag_and_drop',
            path: '/template/more/dragndrop'
          },
        ]
      },
    ]
  },
  // tables_and_forms
  {
    menuType: 'M',
    menuKey: 'tables_and_forms',
    children: [
      {
        menuType: 'C',
        menuKey: 'tables',
        icon: 'menu-template-tables',
        path: '/template/tables'
      },
      {
        menuType: 'C',
        menuKey: 'datatables',
        icon: 'menu-template-datatables',
        children: [
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_basic',
            path: '/template/datatables/basic'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_advanced',
            path: '/template/datatables/advanced'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_skin',
            path: '/template/datatables/skin'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_order_sorting',
            path: '/template/datatables/order-sorting'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_multi_column',
            path: '/template/datatables/multi-column'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_multiple_tables',
            path: '/template/datatables/multiple-tables'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_alt_pagination',
            path: '/template/datatables/alt-pagination'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_checkbox',
            path: '/template/datatables/checkbox'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_range_search',
            path: '/template/datatables/range-search'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_export',
            path: '/template/datatables/export'
          },
          {
            menuType: 'C',
            parentKey: 'datatables',
            menuKey: 'datatables_column_chooser',
            path: '/template/datatables/column-chooser'
          }
        ]
      },
      {
        menuType: 'C',
        menuKey: 'forms',
        icon: 'menu-template-forms',
        children: [
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_basic',
            path: '/template/forms/basic'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_input_group',
            path: '/template/forms/input-group'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_layouts',
            path: '/template/forms/layouts'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_validation',
            path: '/template/forms/validation'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_input_mask',
            path: '/template/forms/input-mask'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_select2',
            path: '/template/forms/select2'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_touchspin',
            path: '/template/forms/touchspin'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_checkbox_and_radio',
            path: '/template/forms/checkbox-radio'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_switches',
            path: '/template/forms/switches'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_wizards',
            path: '/template/forms/wizards'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_file_upload',
            path: '/template/forms/file-upload'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_quill_editor',
            path: '/template/forms/quill-editor'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_date_and_range_picker',
            path: '/template/forms/date-picker'
          },
          {
            menuType: 'C',
            parentKey: 'forms',
            menuKey: 'forms_clipboard',
            path: '/template/forms/clipboard'
          }
        ]
      }
    ]
  },
  // user_and_pages
  {
    menuType: 'M',
    menuKey: 'user_and_pages',
    children: [
      {
        menuType: 'C',
        menuKey: 'users',
        icon: 'menu-template-users',
        children: [
          {
            menuType: 'C',
            parentKey: 'users',
            menuKey: 'profile',
            path: '/template/users/profile'
          },
          {
            menuType: 'C',
            parentKey: 'users',
            menuKey: 'account_settings',
            path: '/template/users/user-account-settings'
          },
        ]
      },
      {
        menuType: 'C',
        menuKey: 'pages',
        icon: 'menu-template-pages',
        children: [
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'knowledge_base',
            path: '/template/pages/knowledge-base'
          },
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'contact_us_boxed',
            layout: 'blank',
            path: '/template/pages/contact-us-boxed'
          },
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'contact_us_cover',
            layout: 'blank',
            path: '/template/pages/contact-us-cover'
          },
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'coming_soon_boxed',
            layout: 'blank',
            path: '/template/pages/coming-soon-boxed'
          },
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'coming_soon_cover',
            layout: 'blank',
            path: '/template/pages/coming-soon-cover'
          },
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'error',
            children: [
              {
                menuType: 'C',
                parentKey: 'error',
                menuKey: '404',
                layout: 'blank',
                path: '/template/pages/error404'
              },
              {
                menuType: 'C',
                parentKey: 'error',
                menuKey: '500',
                layout: 'blank',
                path: '/template/pages/error500'
              },
              {
                menuType: 'C',
                parentKey: 'error',
                menuKey: '503',
                layout: 'blank',
                path: '/template/pages/error503'
              }
            ]
          },
          {
            menuType: 'C',
            parentKey: 'pages',
            menuKey: 'maintenence',
            layout: 'blank',
            path: '/template/pages/maintenence'
          }
        ]
      },
      {
        menuType: 'C',
        menuKey: 'authentication',
        icon: 'menu-template-authentication',
        children: [
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'login_boxed',
            layout: 'blank',
            path: '/template/auth/boxed-signin'
          },
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'register_boxed',
            layout: 'blank',
            path: '/template/auth/boxed-signup'
          },
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'unlock_boxed',
            layout: 'blank',
            path: '/template/auth/boxed-password-reset'
          },
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'login_cover',
            layout: 'blank',
            path: '/template/auth/cover-login'
          },
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'register_cover',
            layout: 'blank',
            path: '/template/auth/cover-register'
          },
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'unlock_cover',
            layout: 'blank',
            path: '/template/auth/cover-lockscreen'
          },
          {
            menuType: 'C',
            parentKey: 'authentication',
            menuKey: 'recover_id_cover',
            layout: 'blank',
            path: '/template/auth/cover-password-reset'
          },
        ]
      },
    ]
  }
]
/**
 * 递归扁平化菜单树结构为简单数组
 */
export const flatMenuTree2MenuList = (list: Menu[]) => {
  let result: Menu[] = [];
  list.forEach((el) => {
    let copyEl = { ...el }
    if (copyEl.children && copyEl.children.length > 0) {
      let children = flatMenuTree2MenuList(copyEl.children);
      result = [...result, ...children];
      copyEl.children = undefined;
    }
    result.push(copyEl);
  });
  return result;
};

export const TemplateMenuList: Menu[] = flatMenuTree2MenuList(TemplateMenuTree)
