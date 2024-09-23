plugins {
    id("java")
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")

    implementation("com.mysql-conector-j:8.3.0") // Consume e usa o my sql
    implementation("com.mysql-conector-j:8.3.0")
    implementation("org.flywaydb-core:10.11.1")
    implementation("org.flywaydb-msql:10.11.1")
// Ja prepara os Get Set
    compileOnly("org.projectlombok:lombok:1.18.32")
    annotationProcessor("org.projectlombok:lombok:1.18.32")
}

tasks.test {
    useJUnitPlatform()
}