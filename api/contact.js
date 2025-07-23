const mongoose = require('mongoose');

let conn = null;

async function connectToDatabase() {
  if (conn == null) {
    conn = await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }
  return conn;
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

let Contact;
try {
  Contact = mongoose.model('Contact');
} catch {
  Contact = mongoose.model('Contact', contactSchema);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Método no permitido' });
    return;
  }
  try {
    await connectToDatabase();
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error al enviar el mensaje.' });
  }
};
