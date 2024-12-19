package cn.chriswood.anthill.example.flex

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles

@SpringBootTest
@ActiveProfiles("test")
class WithContextTests {

    @Test
    fun contextLoads() {
        println("contextLoads")
    }
}
