let created ;
class DBConnection {
    constructor(uri) {
        if (created) {
            return DBConnection.instance
        }
        else {
            this.uri = uri;
            DBConnection.instance = this;
            created = true
            return this
        }

    }
    connect() {
        console.log(`DB ${this.uri} has been connected!`);
    }
    disconnect() {
        console.log("DB disconnected");
    }
}
const connection = new DBConnection("mongodb://...");
const connection1 = new DBConnection("mongodb://..dasdasdasdasd.");

console.log(connection)
console.log(connection1)
