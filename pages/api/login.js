import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { password, username } = req.body;
    if (
      password === process.env.PASSWORD &&
      username === process.env.USERNAME
    ) {
      res.setHeader(
        "set Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("successful");
    } else {
      res.status(500).json("error");
    }
  }
};
