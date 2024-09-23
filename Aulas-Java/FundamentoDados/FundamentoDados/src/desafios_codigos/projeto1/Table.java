package desafios_codigos.projeto1;

import java.util.HashMap;
import java.util.Map;

public class Table {
    private Map<Integer, String> table;

    public Table() {
        this.table = new HashMap<>();
        /*HashMap adiciona elementos com index*/
    }

    // Método insert para adicionar elementos à tabela
    public void insert(int id, String name) {
        table.put(id, name);  // Adiciona o par (ID, nome) ao HashMap
    }

    // Método display para mostrar os nomes armazenados
    public void display() {
        for (String name : table.values()) {
            System.out.println(name);
        }
    }
}