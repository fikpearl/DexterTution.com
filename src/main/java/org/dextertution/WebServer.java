package org.dextertution;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class WebServer {

    private static final String PAGES_PATH = "/Path";

    private final Javalin server1;

    public WebServer() {
        server1 = Javalin.create(config -> config.addStaticFiles(PAGES_PATH, Location.CLASSPATH));
    }

    private void start() {
        server1.start(9000);
    }

    private void stop(){
        server1.stop();
    }

    public int port(){
        return server1.port();
    }

    public static void main(String[] args) {

        WebServer server = new WebServer();
        server.start();
        System.out.println("Hello world!");
    }
}