pluginManagement {
    val aliUsername: String by extra.properties
    val aliPassword: String by extra.properties
    val aliReleaseUrl: String by extra.properties
    val aliSnapshotUrl: String by extra.properties
    repositories {
        mavenLocal()
        maven {
            credentials {
                username = aliUsername
                password = aliPassword
            }
            url = uri(aliReleaseUrl)
        }
        maven {
            credentials {
                username = aliUsername
                password = aliPassword
            }
            url = uri(aliSnapshotUrl)
        }
    }
}
dependencyResolutionManagement {
    val aliUsername: String by extra.properties
    val aliPassword: String by extra.properties
    val aliReleaseUrl: String by extra.properties
    val aliSnapshotUrl: String by extra.properties
    repositoriesMode = RepositoriesMode.PREFER_PROJECT
    repositories {
        mavenLocal()
        maven {
            credentials {
                username = aliUsername
                password = aliPassword
            }
            url = uri(aliReleaseUrl)
        }
        maven {
            credentials {
                username = aliUsername
                password = aliPassword
            }
            url = uri(aliSnapshotUrl)
        }
    }
}

/// 打印gradle.properties
println("gradle properties:")
extra.properties.forEach {
    println("${it.key} - ${it.value}")
}

///定义项目名称
val appName: String by extra.properties
rootProject.name = appName
