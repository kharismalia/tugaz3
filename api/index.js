import express from "express";

const app = express();


app.use(express.json());
app.use(express.static("public"));

const data ={
    nama:["Kharisma Amalia"],
    nim:["01022111014"],
    alamat:["salatiga"],
    kecamatan:["susukan"],
    propinsi:["jawa tengah"],
    ttl:["semarang,23 januari 2003"],
    jenis_kelamin:["perempuan"],
    umur:["19 tahun"],
    agama:["islam"]

};

app.get("/api/index", (_req, res) => {
    res.send(data);
  });
  
  app.listen(3000, () => console.log("server sedang berjalan"));

