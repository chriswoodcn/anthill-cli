package cn.chriswood.anthill.example.flex

import org.junit.ClassRule
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.util.TestPropertyValues
import org.springframework.context.ApplicationContextInitializer
import org.springframework.context.ConfigurableApplicationContext
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.testcontainers.containers.GenericContainer
import org.testcontainers.containers.MySQLContainer
import org.testcontainers.containers.wait.strategy.Wait
import org.testcontainers.utility.DockerImageName

/**
 * 集成测试
 *
 * 使用TestContainers集成到springboot中进行集成测试
 *
 * 使用前提: 系统环境中已经安装安装好docker或podman
 */
@SpringBootTest
@ContextConfiguration(initializers = [AbstractIntegrationTest.Initializer::class])
@AutoConfigureMockMvc
abstract class AbstractIntegrationTest {

    companion object {
        @JvmField
        @ClassRule
        val redisContainer =
            GenericContainer<Nothing>("redis:6-alpine")
                .apply { withExposedPorts(6379) }

        @JvmField
        @ClassRule
        val mysqlPrimary: MySQLContainer<*> = MySQLContainer(
            DockerImageName.parse("mysql:8")
        ).withDatabaseName("test_primary")
            .withUsername("root")
            .withPassword("rootroot")
            .withInitScript("init_test_primary.sql")
            .waitingFor(Wait.forHealthcheck())

    }

    internal class Initializer :
        ApplicationContextInitializer<ConfigurableApplicationContext> {
        override fun initialize(configurableApplicationContext: ConfigurableApplicationContext) {
            redisContainer.start()
            TestPropertyValues.of(
                "spring.redis.host=${redisContainer.host}",
                "spring.redis.port=${redisContainer.firstMappedPort}"
            ).applyTo(configurableApplicationContext.environment)
        }
    }
}

class MvcTest : AbstractIntegrationTest() {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @Test
    fun test_api() {
        val greeting = "Hello Testcontainers with Kotlin"
        mockMvc.perform(
            MockMvcRequestBuilders.post("/").content(greeting)
        )
            .andExpect(MockMvcResultMatchers.status().isOk)
    }
}
