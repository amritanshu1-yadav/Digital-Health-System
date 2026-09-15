// Application data and state management
let appData = {
    emergencyContacts: {
        statewide: {
            police: "100 / 112",
            ambulance: "108",
            fire: "101",
            womenHelpline: "1091 / 181",
            childHelpline: "1098",
            crimeStoppper: "1090",
            healthHelpline: "1056"
        },
        districts: [
            { name: "Thiruvananthapuram", collector: "0471-2730067", police: "0471-324-3000" },
            { name: "Kollam", collector: "0474-2794900", police: "0474-2450168" },
            { name: "Ernakulam", collector: "0484-2423001", police: "0484-2623550" },
            { name: "Kottayam", collector: "0481-2562001", police: "0481-2564700" },
            { name: "Idukki", collector: "0486-2233103", police: "0486-2233006" },
            { name: "Thrissur", collector: "0487-2361020", police: "0487-2323011" },
            { name: "Palakkad", collector: "0491-2505266", police: "0491-2534011" },
            { name: "Malappuram", collector: "0483-2734355", police: "0483-2734377" },
            { name: "Kozhikode", collector: "0495-2371400", police: "0495-2722911" },
            { name: "Wayanad", collector: "0493-6202230", police: "0496-2523100" },
            { name: "Kannur", collector: "0497-2700243", police: "0497-2763332" },
            { name: "Kasaragod", collector: "04994-257401", police: "04994-257401" }
        ]
    },
    hospitals: [
        { name: "Ernakulam General Hospital", location: "Ernakulam", contact: "0484-2382284", emergency: "108", specialties: ["General Medicine", "Emergency", "Surgery"] },
        { name: "Amrita Institute of Medical Sciences", location: "Kochi", contact: "0484-4001234", emergency: "108", specialties: ["Cardiology", "Oncology", "Emergency", "Surgery"] },
        { name: "Medical College Hospital", location: "Thiruvananthapuram", contact: "0471-2528300", emergency: "108", specialties: ["All Specialties", "Emergency", "Trauma Care"] },
        { name: "Kozhikode Medical College", location: "Kozhikode", contact: "0495-2359504", emergency: "108", specialties: ["General Medicine", "Emergency", "Pediatrics"] },
        { name: "Government Medical College", location: "Thrissur", contact: "0487-2420086", emergency: "108", specialties: ["General Medicine", "Emergency", "Surgery"] }
    ],
    sampleUsers: {
        migrantWorkers: [
            {
                id: "MW001", name: "Rajesh Kumar", aadhaarId: "****-****-1234", healthId: "22-1234-5678-9012",
                age: 28, gender: "Male", homeState: "West Bengal", currentLocation: "Ernakulam, Kerala",
                occupation: "Construction Worker", employer: "ABC Construction Pvt Ltd", phone: "9876543210",
                emergencyContact: { name: "Sunita Devi", relation: "Wife", phone: "9876543211" },
                languagePreference: "Hindi", registrationDate: "2024-01-15"
            },
            {
                id: "MW002", name: "Abdul Rahman", aadhaarId: "****-****-5678", healthId: "22-5678-9012-3456",
                age: 32, gender: "Male", homeState: "Assam", currentLocation: "Kochi, Kerala",
                occupation: "Factory Worker", employer: "Kerala Textiles Ltd", phone: "9876543212",
                emergencyContact: { name: "Fatima Begum", relation: "Wife", phone: "9876543213" },
                languagePreference: "Hindi", registrationDate: "2024-02-10"
            },
            {
                id: "MW003", name: "Priya Sharma", aadhaarId: "****-****-9012", healthId: "22-9012-3456-7890",
                age: 25, gender: "Female", homeState: "Bihar", currentLocation: "Thiruvananthapuram, Kerala",
                occupation: "Domestic Worker", employer: "Private Household", phone: "9876543214",
                emergencyContact: { name: "Ram Sharma", relation: "Husband", phone: "9876543215" },
                languagePreference: "Hindi", registrationDate: "2024-03-05"
            }
        ],
        doctors: [
            { id: "DOC001", name: "Dr. Suresh Menon", specialty: "General Medicine", hospital: "Ernakulam General Hospital", registrationNo: "KMC-12345", phone: "9876543220", verified: true },
            { id: "DOC002", name: "Dr. Priya Nair", specialty: "Family Medicine", hospital: "Amrita Institute of Medical Sciences", registrationNo: "KMC-67890", phone: "9876543221", verified: true }
        ]
    },
    sampleDocuments: [
        { id: "DOC_001", userId: "MW001", type: "Prescription", title: "Blood Pressure Medication", uploadDate: "2024-09-15", doctor: "Dr. Suresh Menon", hospital: "Ernakulam General Hospital", description: "Prescription for hypertension management" },
        { id: "DOC_002", userId: "MW001", type: "Lab Report", title: "Complete Blood Count", uploadDate: "2024-09-10", doctor: "Dr. Suresh Menon", hospital: "Ernakulam General Hospital", description: "Routine blood work results" },
        { id: "DOC_003", userId: "MW001", type: "Vaccination Certificate", title: "COVID-19 Vaccination", uploadDate: "2024-08-20", doctor: "Primary Health Center", hospital: "Ernakulam PHC", description: "COVID-19 booster dose certificate" },
        { id: "DOC_004", userId: "MW002", type: "X-Ray", title: "Chest X-Ray", uploadDate: "2024-09-12", doctor: "Dr. Priya Nair", hospital: "Amrita Institute", description: "Chest X-ray for cough evaluation" }
    ],
    sampleAppointments: [
        { id: "APT_001", userId: "MW001", doctorId: "DOC001", doctorName: "Dr. Suresh Menon", hospital: "Ernakulam General Hospital", date: "2024-09-25", time: "10:00 AM", type: "Follow-up", status: "Confirmed", notes: "Blood pressure check" },
        { id: "APT_002", userId: "MW001", doctorId: "DOC001", doctorName: "Dr. Suresh Menon", hospital: "Ernakulam General Hospital", date: "2024-09-18", time: "2:00 PM", type: "Consultation", status: "Completed", notes: "General health checkup" },
        { id: "APT_003", userId: "MW002", doctorId: "DOC002", doctorName: "Dr. Priya Nair", hospital: "Amrita Institute", date: "2024-09-28", time: "11:30 AM", type: "Consultation", status: "Confirmed", notes: "Respiratory issue evaluation" }
    ]
};

let currentUser = null;
let currentUserType = null;
let currentLanguage = 'english';

const translations = {
    english: {
        welcome: "Welcome to Digital Health System", migrantWorker: "Migrant Worker", healthcareProvider: "Healthcare Provider",
        login: "Login", aadhaarId: "Aadhaar ID", healthId: "Health ID", emergency: "Emergency",
        documents: "Documents", appointments: "Appointments", profile: "Profile", upload: "Upload Document",
        viewDocuments: "View Documents", emergencyServices: "Emergency Services", police: "Police",
        ambulance: "Ambulance", fire: "Fire Station", hospital: "Hospital"
    },
    hindi: {
        welcome: "डिजिटल स्वास्थ्य प्रणाली में आपका स्वागत है", migrantWorker: "प्रवासी कामगार", 
        healthcareProvider: "स्वास्थ्य सेवा प्रदाता", login: "लॉगिन", aadhaarId: "आधार आईडी", 
        healthId: "स्वास्थ्य आईडी", emergency: "आपातकाल", documents: "दस्तावेज़", 
        appointments: "अपॉइंटमेंट", profile: "प्रोफाइल", upload: "दस्तावेज़ अपलोड करें",
        viewDocuments: "दस्तावेज़ देखें", emergencyServices: "आपातकालीन सेवाएं", police: "पुलिस",
        ambulance: "एम्बुलेंस", fire: "दमकल", hospital: "अस्पताल"
    },
    malayalam: {
        welcome: "ഡിജിറ്റൽ ആരോഗ്യ സംവിധാനത്തിലേക്ക് സ്വാഗതം", migrantWorker: "കുടിയേറ്റ തൊഴിലാളി",
        healthcareProvider: "ആരോഗ്യ സേവന ദാതാവ്", login: "ലോഗിൻ", aadhaarId: "ആധാർ ഐഡി",
        healthId: "ആരോഗ്യ ഐഡി", emergency: "അടിയന്തര സേവനം", documents: "രേഖകൾ",
        appointments: "അപ്പോയിന്റ്മെന്റുകൾ", profile: "പ്രൊഫൈൽ", upload: "രേഖ അപ്‌ലോഡ് ചെയ്യുക",
        viewDocuments: "രേഖകൾ കാണുക", emergencyServices: "അടിയന്തര സേവനങ്ങൾ", police: "പോലീസ്",
        ambulance: "ആംബുലൻസ്", fire: "അഗ്നിശമന സേവ", hospital: "ആശുപത്രി"
    }
};

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateLanguage();
});

function initializeApp() {
    // Initialize with landing page
    showPage('landingPage');
    
    // Set default language
    document.getElementById('languageSelector').value = currentLanguage;
}

function setupEventListeners() {
    // Language selector
    document.getElementById('languageSelector').addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });

    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Upload form
    document.getElementById('uploadForm').addEventListener('submit', handleUpload);

    // File input
    document.getElementById('fileInput').addEventListener('change', handleFileSelect);

    // Document type filter
    document.getElementById('documentTypeFilter').addEventListener('change', filterDocuments);

    // Close modals on outside click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });

    // Show selected page
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('hidden');
        page.classList.add('active');
    }
}

function showSection(sectionId) {
    if (sectionId === 'dashboard') {
        if (currentUserType === 'migrant') {
            showPage('migrantDashboard');
            loadMigrantDashboard();
        } else if (currentUserType === 'doctor') {
            showPage('doctorDashboard');
            loadDoctorDashboard();
        }
    } else if (sectionId === 'documents') {
        showPage('documentsSection');
        loadDocuments();
    } else if (sectionId === 'appointments') {
        showPage('appointmentsSection');
        loadAppointments();
    } else if (sectionId === 'profile') {
        showPage('profileSection');
        loadProfile();
    }
}

function showLoginModal(userType) {
    currentUserType = userType;
    
    const modal = document.getElementById('loginModal');
    const title = document.getElementById('loginTitle');
    const healthIdGroup = document.getElementById('healthIdGroup');
    
    if (userType === 'migrant') {
        title.textContent = translations[currentLanguage].migrantWorker + ' ' + translations[currentLanguage].login;
        healthIdGroup.style.display = 'block';
    } else {
        title.textContent = translations[currentLanguage].healthcareProvider + ' ' + translations[currentLanguage].login;
        healthIdGroup.style.display = 'none';
    }
    
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    
    // Reset forms
    if (modalId === 'loginModal') {
        document.getElementById('loginForm').reset();
        document.getElementById('otpSection').classList.add('hidden');
    } else if (modalId === 'uploadModal') {
        document.getElementById('uploadForm').reset();
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const aadhaar = document.getElementById('loginAadhaar').value;
    const mobile = document.getElementById('loginMobile').value;
    const healthId = document.getElementById('loginHealthId').value;
    
    // Show loading spinner
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        hideLoading();
        
        // Show OTP section
        document.getElementById('otpSection').classList.remove('hidden');
        
        // Auto-fill OTP for demo
        setTimeout(() => {
            document.getElementById('otpInput').value = '123456';
        }, 1000);
    }, 2000);
}

function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    
    if (otp.length === 6) {
        showLoading();
        
        setTimeout(() => {
            hideLoading();
            
            // Find user and login
            if (currentUserType === 'migrant') {
                currentUser = appData.sampleUsers.migrantWorkers[0]; // Default to first user for demo
                showPage('migrantDashboard');
                loadMigrantDashboard();
            } else {
                currentUser = appData.sampleUsers.doctors[0]; // Default to first doctor for demo
                showPage('doctorDashboard');
                loadDoctorDashboard();
            }
            
            closeModal('loginModal');
        }, 1500);
    } else {
        alert('Please enter a valid 6-digit OTP');
    }
}

function resendOTP() {
    alert('OTP resent successfully!');
}

function loadMigrantDashboard() {
    if (!currentUser) return;
    
    // Update welcome message
    document.getElementById('welcomeMessage').textContent = `Welcome back, ${currentUser.name}!`;
    document.getElementById('userLocation').textContent = currentUser.currentLocation;
    
    // Update counts
    const userDocuments = appData.sampleDocuments.filter(doc => doc.userId === currentUser.id);
    const userAppointments = appData.sampleAppointments.filter(apt => apt.userId === currentUser.id && apt.status === 'Confirmed');
    
    document.getElementById('documentCount').textContent = userDocuments.length;
    document.getElementById('appointmentCount').textContent = userAppointments.length;
    
    // Load recent activity
    loadRecentActivity();
}

function loadRecentActivity() {
    const activityList = document.getElementById('recentActivityList');
    const activities = [
        { icon: '📄', title: 'Document uploaded', time: '2 hours ago' },
        { icon: '📅', title: 'Appointment confirmed', time: '1 day ago' },
        { icon: '🏥', title: 'Health checkup completed', time: '3 days ago' }
    ];
    
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

function loadDocuments() {
    const userDocuments = appData.sampleDocuments.filter(doc => 
        currentUser && doc.userId === currentUser.id
    );
    
    renderDocuments(userDocuments);
}

function renderDocuments(documents) {
    const grid = document.getElementById('documentsGrid');
    
    if (documents.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <p>No documents found. Upload your first document!</p>
                <button onclick="showUploadModal()" class="btn btn--primary">Upload Document</button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = documents.map(doc => `
        <div class="document-card">
            <div class="document-header">
                <span class="document-type">${doc.type}</span>
                <button class="document-menu" onclick="deleteDocument('${doc.id}')">🗑️</button>
            </div>
            <div class="document-preview">📄</div>
            <h4 class="document-title">${doc.title}</h4>
            <div class="document-info">📅 ${doc.uploadDate}</div>
            <div class="document-info">👨‍⚕️ ${doc.doctor}</div>
            <div class="document-info">🏥 ${doc.hospital}</div>
        </div>
    `).join('');
}

function filterDocuments() {
    const filter = document.getElementById('documentTypeFilter').value;
    const userDocuments = appData.sampleDocuments.filter(doc => 
        currentUser && doc.userId === currentUser.id
    );
    
    const filteredDocs = filter ? 
        userDocuments.filter(doc => doc.type === filter) : 
        userDocuments;
    
    renderDocuments(filteredDocs);
}

function showUploadModal() {
    document.getElementById('uploadModal').classList.remove('hidden');
}

function handleUpload(e) {
    e.preventDefault();
    
    const type = document.getElementById('uploadType').value;
    const title = document.getElementById('uploadTitle').value;
    const doctor = document.getElementById('uploadDoctor').value;
    const description = document.getElementById('uploadDescription').value;
    
    // Create new document
    const newDoc = {
        id: `DOC_${Date.now()}`,
        userId: currentUser.id,
        type: type,
        title: title,
        uploadDate: new Date().toISOString().split('T')[0],
        doctor: doctor,
        hospital: doctor.includes('Dr.') ? 'Hospital' : doctor,
        description: description
    };
    
    // Add to documents
    appData.sampleDocuments.push(newDoc);
    
    // Close modal and refresh
    closeModal('uploadModal');
    loadDocuments();
    
    alert('Document uploaded successfully!');
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        // Update upload area to show selected file
        const uploadArea = document.querySelector('.upload-area');
        uploadArea.innerHTML = `
            <div class="upload-icon">📎</div>
            <p>Selected: ${file.name}</p>
            <p class="upload-hint">Ready to upload</p>
        `;
    }
}

function deleteDocument(docId) {
    if (confirm('Are you sure you want to delete this document?')) {
        const index = appData.sampleDocuments.findIndex(doc => doc.id === docId);
        if (index > -1) {
            appData.sampleDocuments.splice(index, 1);
            loadDocuments();
            alert('Document deleted successfully!');
        }
    }
}

function loadAppointments() {
    const userAppointments = appData.sampleAppointments.filter(apt => 
        currentUser && apt.userId === currentUser.id
    );
    
    const upcoming = userAppointments.filter(apt => 
        new Date(apt.date) >= new Date() || apt.status === 'Confirmed'
    );
    
    const past = userAppointments.filter(apt => 
        new Date(apt.date) < new Date() && apt.status === 'Completed'
    );
    
    renderAppointments('upcomingList', upcoming);
    renderAppointments('pastList', past);
}

function renderAppointments(containerId, appointments) {
    const container = document.getElementById(containerId);
    
    if (appointments.length === 0) {
        container.innerHTML = '<p>No appointments found.</p>';
        return;
    }
    
    container.innerHTML = appointments.map(apt => `
        <div class="appointment-card">
            <div class="appointment-header">
                <span class="appointment-doctor">${apt.doctorName}</span>
                <span class="appointment-status ${apt.status.toLowerCase()}">${apt.status}</span>
            </div>
            <div class="appointment-details">
                <div class="appointment-detail">
                    <span>📅 ${apt.date}</span>
                </div>
                <div class="appointment-detail">
                    <span>🕒 ${apt.time}</span>
                </div>
                <div class="appointment-detail">
                    <span>🏥 ${apt.hospital}</span>
                </div>
            </div>
            <div class="appointment-notes">
                <strong>Type:</strong> ${apt.type}<br>
                <strong>Notes:</strong> ${apt.notes}
            </div>
        </div>
    `).join('');
}

function showAppointmentTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.appointments-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide tab content
    document.querySelectorAll('.appointments-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('hidden');
    });
    
    const targetTab = tabName === 'upcoming' ? 'upcomingAppointments' : 'pastAppointments';
    document.getElementById(targetTab).classList.remove('hidden');
    document.getElementById(targetTab).classList.add('active');
}

function loadProfile() {
    if (!currentUser) return;
    
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileId').textContent = currentUser.healthId;
    document.getElementById('profileAge').textContent = currentUser.age;
    document.getElementById('profileGender').textContent = currentUser.gender;
    document.getElementById('profileHomeState').textContent = currentUser.homeState;
    document.getElementById('profileLocation').textContent = currentUser.currentLocation;
    document.getElementById('profileOccupation').textContent = currentUser.occupation;
    document.getElementById('profileEmployer').textContent = currentUser.employer;
    document.getElementById('profileEmergencyContact').textContent = 
        `${currentUser.emergencyContact.name} (${currentUser.emergencyContact.relation})`;
}

function editProfile() {
    alert('Profile editing functionality would be implemented here.');
}

function showEmergencyModal() {
    document.getElementById('emergencyModal').classList.remove('hidden');
    loadHospitals();
}

function loadHospitals() {
    const hospitalItems = document.getElementById('hospitalItems');
    hospitalItems.innerHTML = appData.hospitals.map(hospital => `
        <div class="hospital-item">
            <div class="hospital-info">
                <div class="hospital-name">${hospital.name}</div>
                <div class="hospital-location">${hospital.location}</div>
            </div>
            <a href="tel:${hospital.contact}" class="hospital-contact">${hospital.contact}</a>
        </div>
    `).join('');
}

function callEmergency(number) {
    if (confirm(`Call ${number}?`)) {
        window.open(`tel:${number}`, '_self');
    }
}

function showHospitals() {
    const hospitalsList = document.getElementById('hospitalsList');
    hospitalsList.classList.toggle('hidden');
}

function loadDoctorDashboard() {
    if (!currentUser) return;
    
    document.getElementById('doctorWelcome').textContent = `Welcome, ${currentUser.name}!`;
}

function searchPatient() {
    const searchType = document.getElementById('searchType').value;
    const searchInput = document.getElementById('searchInput').value;
    
    if (!searchInput) {
        alert('Please enter search criteria');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        
        // Find patients (simulate search)
        let patients = [];
        if (searchType === 'aadhaar') {
            patients = appData.sampleUsers.migrantWorkers.filter(user => 
                user.aadhaarId.includes(searchInput.slice(-4))
            );
        } else {
            patients = appData.sampleUsers.migrantWorkers.filter(user => 
                user.healthId.includes(searchInput)
            );
        }
        
        renderSearchResults(patients);
    }, 1500);
}

function renderSearchResults(patients) {
    const resultsDiv = document.getElementById('searchResults');
    const patientList = document.getElementById('patientList');
    
    if (patients.length === 0) {
        patientList.innerHTML = '<p>No patients found.</p>';
    } else {
        patientList.innerHTML = patients.map(patient => `
            <div class="patient-item" onclick="viewPatientRecords('${patient.id}')">
                <div class="patient-name">${patient.name}</div>
                <div class="patient-details">
                    Health ID: ${patient.healthId} | Age: ${patient.age} | ${patient.gender}
                </div>
                <div class="patient-details">
                    Location: ${patient.currentLocation} | Occupation: ${patient.occupation}
                </div>
            </div>
        `).join('');
    }
    
    resultsDiv.classList.remove('hidden');
}

function viewPatientRecords(patientId) {
    const patient = appData.sampleUsers.migrantWorkers.find(p => p.id === patientId);
    if (!patient) return;
    
    // Set patient info
    document.getElementById('patientRecordName').textContent = patient.name;
    document.getElementById('patientRecordId').textContent = `Health ID: ${patient.healthId}`;
    
    // Load patient data
    loadPatientDocuments(patientId);
    loadPatientHistory(patientId);
    loadPatientAppointments(patientId);
    
    showPage('patientRecords');
}

function loadPatientDocuments(patientId) {
    const patientDocs = appData.sampleDocuments.filter(doc => doc.userId === patientId);
    const container = document.getElementById('patientDocumentsList');
    
    container.innerHTML = patientDocs.map(doc => `
        <div class="document-card">
            <div class="document-header">
                <span class="document-type">${doc.type}</span>
            </div>
            <div class="document-preview">📄</div>
            <h4 class="document-title">${doc.title}</h4>
            <div class="document-info">📅 ${doc.uploadDate}</div>
            <div class="document-info">👨‍⚕️ ${doc.doctor}</div>
            <div class="document-info">🏥 ${doc.hospital}</div>
        </div>
    `).join('');
}

function loadPatientHistory(patientId) {
    const history = [
        { date: '2024-09-18', title: 'General Consultation', doctor: 'Dr. Suresh Menon', notes: 'Routine checkup completed' },
        { date: '2024-09-10', title: 'Lab Tests', doctor: 'Lab Technician', notes: 'Blood work ordered and completed' },
        { date: '2024-08-20', title: 'Vaccination', doctor: 'PHC Staff', notes: 'COVID-19 booster administered' }
    ];
    
    const container = document.getElementById('patientHistoryList');
    container.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-date">${item.date}</div>
            <div class="history-title">${item.title}</div>
            <div class="document-info">👨‍⚕️ ${item.doctor}</div>
            <p>${item.notes}</p>
        </div>
    `).join('');
}

function loadPatientAppointments(patientId) {
    const appointments = appData.sampleAppointments.filter(apt => apt.userId === patientId);
    renderAppointments('patientAppointmentsList', appointments);
}

function showPatientTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.patient-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide tab content
    document.querySelectorAll('.patient-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('hidden');
    });
    
    const targetTab = `patient${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`;
    document.getElementById(targetTab).classList.remove('hidden');
    document.getElementById(targetTab).classList.add('active');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        currentUserType = null;
        showPage('landingPage');
    }
}

function showLoading() {
    document.getElementById('loadingSpinner').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingSpinner').classList.add('hidden');
}