package dao;

import entity.Cliente;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ClienteDao {
    private final Connection connection;

    public ClienteDao(Connection connection) {
        this.connection = connection;
    }
    /*^Toda vez que utilizar esse DAO ele ter que gerar a conexao,
    *   Obedecendo a regra de que se a conexao estiver Open, utilizar dela ou se nao, abrir uma nova*/

    public List<Cliente> buscarTodosClientes() throws SQLException {
        String SQL = "SELECT * FROM tb_cliente";

        PreparedStatement preparedStatement = connection.prepareStatement(SQL);
        ResultSet resultSet = preparedStatement.executeQuery();

        List<Cliente> clientes = new ArrayList<>();
        while(resultSet.next()){ /*Enquanto true, rodará o proximo elemento*/
            Cliente cliente = new Cliente();
            cliente.setId(resultSet.getInt("id"));
            cliente.setNome(resultSet.getString("nome"));
            clientes.add(cliente);
        }
        return clientes;
    }

    public void inserirTodosClientes(String nome)throws SQLException{
        String SQL = "INSERT INTO tbl_cliente(nome) VALUES (?)";
        PreparedStatement preparedStatement = connection.prepareStatement(SQL);

        preparedStatement.setString(1, nome);
        preparedStatement.executeUpdate();
    }
}
