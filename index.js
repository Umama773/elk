// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// // =======================
// // ✅ Middleware
// // =======================
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // =======================
// // ✅ MongoDB Connections
// // =======================

// // 1️⃣ Authentication DB (for login/register)
// mongoose.createConnection('mongodb://127.0.0.1:27017/eventsphere-auth', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// // .asPromise()
//   .then(() => console.log('✅ Auth DB Connected'))
//   .catch((err) => console.error('❌ Auth DB Connection Failed:', err));

// // // 2️⃣ Admin DB (for CRUD like expos, schedules)
// // mongoose.connect('mongodb://127.0.0.1:27017/eventsphere-admin', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// // .then(() => console.log('✅ Admin DB Connected'))
// // .catch((err) => console.error('❌ Admin DB Connection Failed:', err));

// // =======================
// // ✅ Route Imports
// // =======================
// const authRoutes = require('./routes/authroutes');
// const expoRoutes = require('./routes/expoRoutes');
// const exhibitorRoutes = require('./routes/exhibitorRoutes');

// const scheduleRoutes = require('./routes/scheduleRoutes');
// const analyticalRoutes = require('./routes/analyticalRoutes');
// const exhibitorPortalRoutes = require('./routes/ExhibitorPortalRoutes');
// const attendeeRoutes = require('./routes/attendeeRoutes');
// const sessionRoutes = require('./routes/sessionRoutes');
// const messagingRoutes = require('./routes/messagingRoutes');

// // =======================
// // ✅ Route Setup
// // =======================
// app.use('/api/auth', authRoutes);                         // Auth routes using eventsphere-auth
// app.use('/api/expo', expoRoutes);                         // CRUD routes using eventsphere-admin
// app.use('/api/admin/exhibitors', exhibitorRoutes);
// app.use('/api/schedules', scheduleRoutes);
// app.use('/api/analytical', analyticalRoutes);
// app.use('/api/exhibitor-portal', exhibitorPortalRoutes);
// app.use('/api/attendees', attendeeRoutes);
// app.use('/api/sessions', sessionRoutes);
// app.use('/api/messages', messagingRoutes);

// // =======================
// // ✅ Start Server
// // =======================
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();


// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ MongoDB Connection (single DB for all)
mongoose.connect('mongodb://127.0.0.1:27017/eventsphere-auth')
  .then(() => console.log('✅ Auth DB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Failed:', err));

// ✅ Route Imports
const authRoutes = require('./routes/authroutes');
const expoRoutes = require('./routes/expoRoutes');
const exhibitorRoutes = require('./routes/exhibitorRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const analyticalRoutes = require('./routes/analyticalRoutes');
// const exhibitorPortalRoutes = require('./routes/ExhibitorPortalRoutes');
const boothRoutes = require('./routes/boothRoutes');
const messageRoutes = require('./routes/messageRoutes');
const exhibitorProfileRoutes = require('./routes/exhibitorProfileRoutes');




const attendeeRoutes = require('./routes/attendeeRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

// ✅ Route Setup
app.use('/api/auth', authRoutes);
app.use('/api/expo', expoRoutes);
app.use('/api/exhibitors', exhibitorRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/analytics', analyticalRoutes); // ✅ IMPORTANT
// app.use('/api/exhibitor-portal', exhibitorPortalRoutes);
app.use('/api/exhibitor-portal/profile', exhibitorProfileRoutes);
app.use('/api/booths', boothRoutes);
app.use('/api/exhibitor/messages',messageRoutes);
app.use('/api/attendees', attendeeRoutes);
app.use('/api/sessions', sessionRoutes);
// app.use('/api/messages', messageRoutes);


// ✅ Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Server Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const app = express();

// // ✅ Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ✅ MongoDB Connection (single DB for all)
// mongoose.connect('mongodb://127.0.0.1:27017/eventsphere-auth', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('✅ Auth DB Connected'))
//   .catch((err) => console.error('❌ MongoDB Connection Failed:', err));

// // ✅ Route Imports
// const authRoutes = require('./routes/authroutes');
// const expoRoutes = require('./routes/expoRoutes');
// const exhibitorRoutes = require('./routes/exhibitorRoutes');
// const scheduleRoutes = require('./routes/scheduleRoutes');
// const analyticalRoutes = require('./routes/analyticalRoutes');
// const boothRoutes = require('./routes/boothRoutes');
// const exhibitorMessageRoutes = require('./routes/exhibitor/messageRoutes');
// const exhibitorProfileRoutes = require('./routes/exhibitorProfileRoutes');
// const attendeeRoutes = require('./routes/attendeeRoutes');
// const sessionRoutes = require('./routes/sessionRoutes');
// const messagingRoutes = require('./routes/messageRoutes');

// // ✅ Route Setup
// app.use('/api/auth', authRoutes);
// app.use('/api/expo', expoRoutes);
// app.use('/api/exhibitors', exhibitorRoutes);
// app.use('/api/schedules', scheduleRoutes);
// app.use('/api/analytical', analyticalRoutes);
// app.use('/api/exhibitor-portal', exhibitorProfileRoutes);
// app.use('/api/booths', boothRoutes);
// app.use('/api/exhibitor/messages', exhibitorMessageRoutes);
// app.use('/api/attendees', attendeeRoutes);
// app.use('/api/sessions', sessionRoutes);
// app.use('/api/messages', messagingRoutes);

// // ✅ Error Handling for 404
// app.use((req, res, next) => {
//   res.status(404).json({ message: '❌ Route not found' });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error('🔥 Global Error:', err.stack);
//   res.status(500).json({ message: '❌ Internal server error' });
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });
