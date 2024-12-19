import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.springframework.boot.gradle.tasks.bundling.BootJar

plugins {
    alias(libs.plugins.spring.boot)
    alias(libs.plugins.spring.dependency)
    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.kotlin.spring)
}

group = extra.properties["appGroup"] as String
version = extra.properties["appVersion"] as String
java.sourceCompatibility = JavaVersion.VERSION_17

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "17"
    }
}

tasks.create("bootRunMainClassName") {
    doLast {
        springBoot.mainClass.get()
    }
}

tasks.withType<BootJar> {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}

sourceSets {
    test {
        resources {
            srcDir("src/test/resources")
        }
    }
}

dependencies {
    implementation(libs.bundles.anthill)

    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.springframework.boot:spring-boot-starter-aop")
    implementation("org.springframework.boot:spring-boot-autoconfigure")
    implementation("org.springframework.boot:spring-boot-configuration-processor")
    implementation("org.yaml:snakeyaml")
    implementation("org.slf4j:slf4j-api")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")
    runtimeOnly("com.mysql:mysql-connector-j")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("io.kotest:kotest-runner-junit5:5.9.1")
    // Testcontainers核心库
    testImplementation("org.testcontainers:testcontainers:1.20.4")
    testImplementation("org.testcontainers:mysql:1.20.4")
}
