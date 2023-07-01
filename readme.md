# Fortune Estate - Real Estate Marketplace

## Project Description:

Fortune Estate is a real estate marketplace that connects realtors, home sellers, and homebuyers, enabling them to buy, sell, or rent properties efficiently. The platform provides a user-friendly interface with various features like property search, agent contact, and effective research of real estate items.

## Project Link:

Visit the live website: [Fortune Estate](https://fortuneestate.netlify.app)

## Technologies Used:

- Framework: ReactJS
- Routing: React Router DOM
- Styling: Tailwind CSS, CSS, SCSS
- Notification: React Toastify
- Image Upload: Cloudinary
- State Management: Zustand, React Query
- Data Fetching: Axios
- Form Management and Validation: React Hook Form, Yup
- Deployment: Vercel
- Charting: ApexCharts

## About the Project:

Fortune Estate is a digital platform that acts as a mediator between homeowners and buyers/renters in the real estate market. Property owners can list their properties, set prices, and interact with potential customers, while buyers/renters can search for properties, view images and descriptions, and contact agents for inquiries.

## Product Overview:

The real estate marketplace provides a platform for users to find houses for sale or rent. It offers a wide range of options to potential buyers and renters, empowering them to make informed decisions through detailed property information and visuals.

## Target Audience:

- Realtors
- Home sellers
- Homebuyers

## Main Features:

- Layout: Higher-order component (HOC) responsible for defining the overall application structure, including headers, footers, and sidebars.
- HomePageLayout: HOC defining the layout for the home page, tailored for the best user experience.
- DashBoardLayout: HOC defining the dashboard layout, providing specific components and styling for users' dashboards.
- AdvertService: Page displaying information about advertising services offered.
- Continents: Page displaying information about continents, listing them or providing details.
- Contact: Page containing contact information or a contact form to connect with the application's owners.
- Home: Represents the home page of the application, providing an overview of the application's features and content.
- Countries: Page displaying information about countries, listing them or providing details about specific countries.
- Properties: Page related to real estate properties, displaying a list of properties available for sale or rent.
- Property: Page showing detailed information about a specific property.
- AllProperties: Page displaying all available properties with filtering and sorting options.
- DashBoard: Page representing the user's dashboard with various widgets and tools related to their account and activities.
- Upload: Page related to uploading files or images, used in the dashboard for adding new content.
- ListingStats: Page showing statistics or analytics related to property listings.
- ListingManager: Page used for managing property listings, such as editing, updating, or removing listings.
- Profile: Page displaying the user's profile information.
- Settings: Page where users can configure application settings related to their account or preferences.
- DashboardProperties: Page displaying properties related to the user's dashboard.
- TrackListing: Page for tracking or monitoring property listings, possibly for analytics or performance evaluation.
- PageLoading: Component used as a fallback when asynchronous components are being loaded.
- SubNav: Component representing a sub-navigation menu, used in conjunction with the Layout or other pages.
- Filters: Component representing filters used for sorting or filtering properties in the application.
- PropertiesDetails: Page showing detailed information about a specific property, used in the dashboard.
- Maps: Page related to displaying maps, used for property location visualization.
- Agents: Page showing information about real estate agents or agencies.
- AgentDetails: Page showing detailed information about a specific real estate agent.
- ProfileUpdate: Page for updating the user's profile information in the dashboard.

## Functionality:

The project implements role-based authentication, offering different functionalities to subscribers and agents:

- Subscriber: View properties and add them to favorites.
- Agent: Create, read, update, and delete (CRUD) operations for their own uploaded properties.

The application's data is organized into continents, countries, and properties. The app features a multi-step form for agents to insert data for a single property, with image upload powered by Cloudinary and form validation using React Hook Form.

Additional functionalities include sorting, filtering, and pagination for the properties page. The project also utilizes multiple page layouts for a cleaner design and better user experience.

## Accomplishments:

Throughout the development process, the project achieved several significant milestones, including:

- Successful implementation of role-based authentication.
- Integration of Cloudinary widget for image uploads and saving them to the backend.
- Effective management of forms using Zustand.
- Implementation of filtering, sorting, and pagination for property listings.
- Utilization of Tailwind CSS for a modern and clean design.
- Incorporation of multiple page layouts for enhanced user experience.

By accomplishing these goals, Fortune Estate has become a functional and user-friendly real estate marketplace.
