package desafios_codigos.projeto1;

/*Descrição
Implemente um programa onde o usuário informa a quantidade de elementos que deseja inserir em uma tabela. Em seguida, o usuário deve inserir o ID e o nome de cada elemento. A tabela deve armazenar esses elementos e, ao final, o programa deve exibir todos os nomes armazenados na tabela, um abaixo do outro.

Instrução

Implementar o Método insert

Você deve completar o método insert que insere um par (ID, nome) na tabela.

Utilize o método put do HashMap para adicionar o par chave-valor ao mapa.

Entrada
Um inteiro n representando a quantidade de elementos a serem inseridos.

Seguido por n pares de entradas onde cada par contém um inteiro (ID) e uma string (nome).

Saída
A lista de nomes armazenados na tabela, um abaixo do outro.*/

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Table table = new Table();

        int n = scanner.nextInt();
        scanner.nextLine(); // Consumir a quebra de linha após o número inteiro

        for (int i = 0; i < n; i++) {
            int id = scanner.nextInt();   // Lê o ID
            scanner.nextLine();           // Consumir a quebra de linha após o ID
            String name = scanner.nextLine(); // Lê o nome
            table.insert(id, name);           // Insere o ID e o nome na tabela
        }

        table.display();  // Exibe os nomes armazenados
        scanner.close();  // Fecha o scanner
    }
}
