package configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {
    private static Connection connection;
//quando trabalhando com BD, necessario cuidar com a quantidade de conexoes que estou abrindo
    public static Connection getConnection() throws SQLException{
        if(connection !=null && !connection.isClosed()){/*Valida e tem alguma coneção é nula*/
            return connection;/*Abrindo Conexao*/
        }

        return DriverManager.getConnection("jdbc:mysql://localhost:3306/cadastro_clientes", "root", "admin");
    }
}
