package cn.chriswood.anthill.example.flex

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.data.web.SpringDataWebAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [SpringDataWebAutoConfiguration::class])
class ExampleFlexApplication

fun main(args: Array<String>) {
    runApplication<ExampleFlexApplication>(*args)
}
