package cn.chriswood.anthill.example.flex

import io.kotest.core.spec.style.AnnotationSpec
import io.kotest.core.spec.style.DescribeSpec
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.string.shouldHaveLength
import org.testcontainers.containers.GenericContainer
import org.testcontainers.containers.MySQLContainer
import org.testcontainers.containers.wait.strategy.Wait
import org.testcontainers.utility.DockerImageName

class FunTest : FunSpec({

    test("FunTest 1") {
        1 + 2 shouldBe 3
    }
    test("FunTest 2") {
        "helloworld".length shouldBe 10
    }
    listOf(
        "sam",
        "pam",
        "tim",
    ).forEach {
        test("$it should be a three letter name") {
            it.shouldHaveLength(3)
        }
    }
})

class NestedTest : DescribeSpec({

    describe("an outer test") {
        it("an inner test") {
            1 + 2 shouldBe 3
        }
        it("an inner test too!") {
            3 + 4 shouldBe 7
        }
    }
})

class AnnotationSpecExample : AnnotationSpec() {
    //    @BeforeAll / @BeforeClass
    //    @BeforeEach / @Before
    //    @AfterAll / @AfterClass
    //    @AfterEach / @After
    @BeforeEach
    fun beforeTest() {

    }

    @Test
    fun testRedisStart() {
        val redisContainer =
            GenericContainer<Nothing>("redis:6.2")
                .apply { withExposedPorts(6379) }
        redisContainer.start()
        println("${redisContainer.host}:${redisContainer.exposedPorts[0]}")
        redisContainer.stop()
    }

    @Test
    fun testFindRes() {
        val resource =
            AnnotationSpecExample::class.java.getResource("/init_test_primary.sql")
        if (null == resource) {
            println("Resource not found")
        } else {
            println("Resource found at: $resource")
        }
    }

    @Test
    fun testMysqlStart() {
        val mysqlPrimary = MySQLContainer(
            DockerImageName.parse("mysql:8")
        ).withDatabaseName("test_primary")
            .withUsername("root")
            .withPassword("rootroot")
            .withInitScript("init_test_primary.sql")
            .waitingFor(Wait.forHealthcheck())

        mysqlPrimary.start()
        println("${mysqlPrimary.host}:${mysqlPrimary.exposedPorts[0]}")
        println("${mysqlPrimary.username}:${mysqlPrimary.password}")
        println(mysqlPrimary.databaseName)
        mysqlPrimary.stop()
    }
}
