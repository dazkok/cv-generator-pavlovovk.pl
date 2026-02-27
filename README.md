# Personal Portfolio Website with CV Generator

## About the Project

This is a modern personal portfolio website built with Laravel and React that allows real-time generation of PDF resumes (CV). The site supports three languages (Ukrainian, English, and Polish) and includes a fully functional contact form.

### Key Features

- 🌍 **Multilingual** - Support for Ukrainian, English, and Polish languages
- 📄 **CV Generator** - Dynamic creation of PDF resumes with personal data
- 📱 **Responsive Design** - Perfect appearance on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- ⚡ **High Performance** - React 19 + Inertia.js for fast navigation
- 🔒 **Spam Protection** - Rate limiting for contact form

### Tech Stack

**Backend:**
- Laravel 12 (PHP 8.4)
- Inertia.js for seamless React integration
- DomPDF for PDF document generation
- Laravel Fortify for authentication

**Frontend:**
- React 19 with TypeScript
- Tailwind CSS for styling
- shadcn/ui and Radix UI for components
- Vite for fast builds

**Tools:**
- Prettier for code formatting
- ESLint for quality checking
- PHPUnit for testing

## Project Structure

```
├── app/
│   ├── Http/Controllers/     # API Controllers
│   ├── Services/             # Business Logic
│   └── Http/DTO/             # Data Transfer Objects
├── resources/
│   ├── js/
│   │   ├── Pages/            # React Page Components
│   │   ├── components/       # Reusable Components
│   │   └── layouts/          # App Layouts
│   ├── views/                # Blade Templates for PDF
│   └── lang/                 # Localization Files
└── routes/web.php            # Application Routes
```

## Main Routes

- `/` - Portfolio homepage
- `/privacy` - Privacy policy
- `/contact` - API endpoint for contact form
- `/cv/{id}/pdf` - PDF resume generation

## Installation & Setup

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd pavlovovk
   ```

2. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Database Migration**
   ```bash
   php artisan migrate
   ```

5. **Run Application**
   ```bash
   # For development
   npm run dev
   
   # Or use the ready script
   composer run dev
   ```

## Localization

The project supports three languages. Translation files are located in `resources/lang/`:
- `uk/` - Ukrainian
- `en/` - English  
- `pl/` - Polish

Language is automatically determined based on URL prefix or browser settings.

## CV Generation

The CV generation system uses:
- **Blade Templates** for HTML resume layout
- **DomPDF** for PDF conversion
- **Service Layer** for business logic
- **DTO** for data transfer between layers

## Contact Form

Implemented with the following features:
- Server-side data validation
- Rate limiting (5 requests per minute)
- IP and User-Agent logging
- JSON API response

## Testing

```bash
# Run all tests
php artisan test

# Run with coverage
php artisan test --coverage
```

## License

The project is distributed under the MIT license. See LICENSE file for details.

## Author

This project is a personal portfolio demonstrating web development skills using modern technologies.
