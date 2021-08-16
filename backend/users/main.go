package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

type User struct {
	IdUser   int    `json:"idUser"`
	FullName string `json:"fullName"`
}

type Userslist struct {
	Users []User
}

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	e.GET("/users", GetUsers)
	e.Logger.Fatal(e.Start(":8080"))
}

func GetUsers(c echo.Context) error {
	fmt.Println("Start MYSQL Connection")
	db, err := OpenConnection()
	defer db.Close()

	results, err := db.Query("SELECT * FROM Users")
	if err != nil {
		panic(err.Error())
	}
	users := Userslist{}
	for results.Next() {
		user := User{}
		err = results.Scan(&user.IdUser, &user.FullName)
		if err != nil {
			panic(err.Error())
		}
		users.Users = append(users.Users, user)
	}
	log.Println(users)
	err = c.Bind(users)
	if err != nil {
		return nil
	}
	c.Response().Header().Set(echo.HeaderAccessControlAllowOrigin, "*")
	c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
	c.Response().Header().Set(echo.HeaderAccessControlAllowMethods, echo.GET)
	c.Response().WriteHeader(http.StatusOK)
	return json.NewEncoder(c.Response()).Encode(users)
}

func OpenConnection() (*sql.DB, error) {
	db, err := sql.Open("mysql", "user:pw@tcp(mysql-react-service:3306)/mydb")
	if err != nil {
		panic(err.Error())
		return nil, err
	}
	return db, nil
}
