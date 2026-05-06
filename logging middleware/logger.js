const fetch = require("node-fetch");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW5pc2hnYS5zLjIwMjMuY3NlQHJpdGNoZW5uYWkuZWR1LmluIiwiZXhwIjoxNzc4MDQ0NTU5LCJpYXQiOjE3NzgwNDM2NTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJjODg2NTQ3MS0wYjdlLTRlMzUtYmI1Yi1hNDliMDYwNmY5YzkiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwic3ViIjoiMDIwOGY4N2EtM2Y1YS00NzEwLTgwODktMjVjYTMwODUwMWMxIn0sImVtYWlsIjoia2FuaXNoZ2Eucy4yMDIzLmNzZUByaXRjaGVubmFpLmVkdS5pbiIsIm5hbWUiOiJrYW5pc2hnYSBzIiwicm9sbE5vIjoiMjExNzIzMDAyMDA5NSIsImFjY2Vzc0NvZGUiOiJCVENEcVQiLCJjbGllbnRJRCI6IjAyMDhmODdhLTNmNWEtNDcxMC04MDg5LTI1Y2EzMDg1MDFjMSIsImNsaWVudFNlY3JldCI6IlZrekhUbWZIekNTVEpzQUcifQ.DMwmP3jqOCuJyqr28U_9R1l_HOEtdtPRzqA-VguuIDA";

async function Log(stack, level, packageName, message) {
  await fetch("http://20.207.122.201/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      stack,
      level,
      package: packageName,
      message
    })
  });
}

module.exports = Log;
