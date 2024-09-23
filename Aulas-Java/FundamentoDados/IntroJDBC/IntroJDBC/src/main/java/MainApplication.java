import configuration.DB;
import dao.ClienteDao;
import entity.Cliente;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MainApplication {
    public static void main(String[] args) throws SQLException {
        try(Connection connection = DB.getConnection()){
            ClienteDao clienteDao = new ClienteDao(connection);
            List<Cliente> clientes = clienteDao.buscarTodosClientes();
            System.out.println(clientes);
        }

    }
}
