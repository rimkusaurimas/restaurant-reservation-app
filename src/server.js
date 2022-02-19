import { Server } from "miragejs";

export const makeServer = () => {
  let server = new Server({
    routes() {
      this.passthrough(
        "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/**"
      );
      this.get("api/users", {
        users: [
          {
            id: 1,
            userName: "John Doe",
            password: "inbif",
            email: "john.doe@gmail.com",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
            location: "A. Juozapavičiaus pr. 11, Kaunas",
          },
          {
            id: 2,
            userName: "Dave Smith",
            password: "inbif2",
            email: "dave@gmail.com",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
            location: "A. Juozapavičiaus pr. 10, Kaunas",
          },
        ],
      });

      this.post("api/users", (_, request) => {
        let attrs = JSON.parse(request.requestBody);
        return attrs;
      });
    },
  });

  return server;
};
