// Sample data modelled on the website database (trabaho_tu_bunawan.sql).
// Later (Finals Topic 6) this can be replaced by fetch() calls to a PHP API.
export const barangays = [
  'Bunawan Brook', 'Consuelo', 'Imelda', 'Libertad', 'Mambalili',
  'Nueva Era', 'Poblacion', 'San Andres', 'San Marcos', 'San Teodoro',
];

export const categories = [
  { id: 1, name: 'Retail', icon: 'cart-outline' },
  { id: 2, name: 'Food and Service', icon: 'restaurant-outline' },
  { id: 3, name: 'Farming and Agriculture', icon: 'leaf-outline' },
  { id: 4, name: 'Construction', icon: 'hammer-outline' },
  { id: 5, name: 'Education', icon: 'school-outline' },
  { id: 6, name: 'Driver and Delivery', icon: 'bicycle-outline' },
  { id: 7, name: 'Household Help', icon: 'home-outline' },
  { id: 8, name: 'Office and Admin', icon: 'briefcase-outline' },
  { id: 9, name: 'Health', icon: 'medkit-outline' },
  { id: 10, name: 'Others', icon: 'ellipsis-horizontal-circle-outline' },
];

export const employers = [
  { id: 1, name: 'Printing Shop', type: 'Individual', barangay: 'San Teodoro', address: 'P-6B, Bliss', landmark: 'In front of Palawan', contact: 'April Jean Morgadez', position: 'Owner', phone: '09102853947', verified: 'Verified Local', about: 'A local printing shop offering photocopying, tarpaulin and photo printing.' },
  { id: 2, name: 'Sari-Sari Store', type: 'Registered Business', barangay: 'Bunawan Brook', address: 'Purok-3', landmark: 'Front of the basketball court', contact: 'Natalie Amado', position: 'Owner', phone: '09786567400', verified: 'Verified Business', about: 'Neighborhood store serving the community since 2018.' },
  { id: 3, name: 'Arellano Household', type: 'Individual', barangay: 'Bunawan Brook', address: 'P-3 Brook', landmark: 'Beside the court', contact: 'Jella Arellano', position: 'House Owner', phone: '09878789870', verified: 'Verified Local', about: 'A family looking for trusted household help.' },
  { id: 4, name: 'Bunawan Agri Supply', type: 'Registered Business', barangay: 'Poblacion', address: 'National Highway', landmark: 'Near the public market', contact: 'Mario Dela Cruz', position: 'Manager', phone: '09175550123', verified: 'Verified Business', about: 'Supplier of farm inputs and tools for local farmers.' },
];

export const jobs = [
  { id: 1, employerId: 2, categoryId: 1, title: 'Store Assistant', type: 'Full-time', salary: '₱450 / day', barangay: 'Bunawan Brook', slots: 2, deadline: '2026-12-15', studentFriendly: true, featured: true,
    description: 'Assist with daily store operations, including arranging products, assisting customers, checking stocks, and keeping the store clean.',
    responsibilities: ['Assist customers with their purchases.', 'Arrange and organize products on shelves.', 'Help monitor inventory and stock availability.', 'Keep the store clean and organized.'],
    qualifications: ['At least senior high school level.', 'Friendly, honest, and responsible.', 'No prior work experience required.'] },
  { id: 2, employerId: 1, categoryId: 1, title: 'Printing Shop Assistant', type: 'Part-time', salary: '₱350 / day', barangay: 'San Teodoro', slots: 1, deadline: '2026-12-01', studentFriendly: true, featured: false,
    description: 'Help walk-in customers with photocopying and printing, prepare documents for printing, and assist with tarpaulin and photo printing orders. We will teach you the machines.',
    responsibilities: ['Assist customers with photocopying and printing.', 'Prepare documents for printing.', 'Help with tarpaulin and photo orders.'],
    qualifications: ['Students and fresh graduates welcome.', 'Willing to learn.', 'Able to work weekends.'] },
  { id: 3, employerId: 2, categoryId: 1, title: 'Store Cashier', type: 'Full-time', salary: '₱15,000 / month', barangay: 'Bunawan Brook', slots: 1, deadline: '2026-12-20', studentFriendly: false, featured: true,
    description: 'Serve customers at the counter, handle cash and digital payments accurately, and help keep the store organized. Training will be provided.',
    responsibilities: ['Greet customers and process purchases.', 'Receive cash and digital payments.', 'Give correct change and issue receipts.'],
    qualifications: ['Honest and friendly.', 'Basic math skills.', 'Fresh graduates are welcome.'] },
  { id: 4, employerId: 3, categoryId: 7, title: 'Babysitter', type: 'Part-time', salary: '₱300 / day', barangay: 'Bunawan Brook', slots: 1, deadline: '2026-11-30', studentFriendly: false, featured: false,
    description: 'We need a responsible babysitter for our daughter on weekdays from 1 PM to 6 PM.',
    responsibilities: ['Watch over our daughter.', 'Prepare simple snacks.', 'Keep the play area tidy.'],
    qualifications: ['Patient and caring.', 'Prior childcare experience is a plus.'] },
  { id: 5, employerId: 4, categoryId: 3, title: 'Farm Supply Helper', type: 'Full-time', salary: '₱400 / day', barangay: 'Poblacion', slots: 3, deadline: '2026-12-10', studentFriendly: false, featured: false,
    description: 'Load and unload farm supplies, assist customers, and help with stock counting.',
    responsibilities: ['Load and unload deliveries.', 'Assist customers in finding products.', 'Help with weekly stock counts.'],
    qualifications: ['Physically fit.', 'Reliable and on time.'] },
  { id: 6, employerId: 4, categoryId: 6, title: 'Delivery Rider', type: 'Full-time', salary: '₱500 / day', barangay: 'Poblacion', slots: 2, deadline: '2026-12-05', studentFriendly: false, featured: false,
    description: 'Deliver supplies to farms and stores around Bunawan using the company motorcycle.',
    responsibilities: ['Deliver orders on time.', 'Collect payment and proof of delivery.', 'Report vehicle issues.'],
    qualifications: ['Valid driver’s license.', 'Knows the roads in Bunawan.'] },
  { id: 7, employerId: 1, categoryId: 8, title: 'Encoder (Weekend)', type: 'Part-time', salary: '₱300 / day', barangay: 'San Teodoro', slots: 1, deadline: '2026-12-12', studentFriendly: true, featured: false,
    description: 'Type and format documents for walk-in clients on weekends.',
    responsibilities: ['Encode documents accurately.', 'Format resumes and forms.', 'Print and hand over finished work.'],
    qualifications: ['Fast and accurate typing.', 'Knows MS Word.'] },
  { id: 8, employerId: 3, categoryId: 7, title: 'Household Helper', type: 'Full-time', salary: '₱6,000 / month', barangay: 'Bunawan Brook', slots: 1, deadline: '2026-12-18', studentFriendly: false, featured: false,
    description: 'General household help including cleaning, laundry, and meal preparation.',
    responsibilities: ['Clean the house daily.', 'Do laundry.', 'Help prepare meals.'],
    qualifications: ['Honest and hardworking.', 'Experience preferred.'] },
];

export const initialApplications = [
  { id: 1, jobId: 1, name: 'Juan Dela Cruz', phone: '09171234567', message: 'I am interested and available immediately.', status: 'shortlisted', appliedAt: '2026-11-02' },
  { id: 2, jobId: 4, name: 'Juan Dela Cruz', phone: '09171234567', message: 'I have experience caring for my younger siblings.', status: 'pending', appliedAt: '2026-11-05' },
];

export const getJob = (id) => jobs.find((j) => j.id === id);
export const getEmployer = (id) => employers.find((e) => e.id === id);
export const getCategory = (id) => categories.find((c) => c.id === id);
