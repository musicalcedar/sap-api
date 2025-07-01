import app from './interfaces/http/server';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀🚀🚀`);
});
