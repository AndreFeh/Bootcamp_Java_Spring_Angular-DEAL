package desafios_codigos.projeto2;
/*
Descrição
Implemente um programa que permita ao usuário remover elementos da tabela. O usuário deve informar o ID do elemento que deseja remover. O programa deve exibir os nomes restantes na tabela após a remoção.

Instrução:

Completar o Método de Remoção:

Implemente o método delete para remover um elemento da tabela usando a chave (ID) fornecida.

Entrada
Um inteiro n representando a quantidade de elementos a serem removidos.

Seguido por n IDs de elementos a serem removidos.

Saída
A lista de nomes restantes na tabela, um abaixo do outro.
*/

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Table {

    private Map<Integer, String> table;

    public Table() {
        this.table = new HashMap<>();
    }

    // Método para inserir elementos na tabela
    public void insert(int key, String value) {
        table.put(key, value);
    }

    // Método para deletar um elemento da tabela usando sua chave (ID)
    public void delete(int key) {
        if (table.containsKey(key)) {
            table.remove(key); // Remove o elemento se o ID existir
        } else {
            System.out.println("ID " + key + " não encontrado.");
        }
    }

    // Método para exibir todos os nomes restantes na tabela
    public void display() {
        for (String name : table.values()) {
            System.out.println(name);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Table table = new Table
                ();

        // Inserindo dados para exemplo
        table.insert(1, "Alice");
        table.insert(2, "Bob");
        table.insert(3, "Charlie");
        table.insert(4, "Paula");
        table.insert(5, "Gabriela");
        table.insert(6, "Luiza");

        // Leitura da quantidade de elementos a serem removidos
        int n = scanner.nextInt();

        // Remover n elementos da tabela com base no ID fornecido
        for (int i = 0; i < n; i++) {
            int id = scanner.nextInt();
            table.delete(id);
        }

        // Exibir os nomes restantes após as remoções
        table.display();
        scanner.close();
    }
}