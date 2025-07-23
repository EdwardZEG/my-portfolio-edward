require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB connection
 mongoose.connect(process.env.MONGODB_URI)
   .then(() => {
     console.log('✅ Conexión a MongoDB Atlas exitosa');
   })
   .catch((err) => {
     console.error('❌ Error al conectar a MongoDB Atlas:', err.message);
   });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error al enviar el mensaje.' });
  }
});

// Serve static files (frontend)
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log('==============================');
   console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
   console.log('Frontend: http://localhost:' + PORT);
   console.log('API Contacto: http://localhost:' + PORT + '/api/contact');
   console.log('==============================');
 });
