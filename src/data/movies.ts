import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Future of AI',
  description: 'Explore the cutting-edge developments in artificial intelligence and machine learning that are shaping our world.',
  genre: ['Technology', 'Documentary'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: '/src/assets/1.jpg',
  backdrop: '/src/assets/1.jpg',
  videoUrl: '/videos/featured.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Neural Networks Explained',
    description: 'A comprehensive guide to understanding neural networks and deep learning algorithms.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/videos/neural-networks.mp4',
    trailerUrl: '/videos/neural-networks-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Machine Learning Basics',
    description: 'Learn the fundamentals of machine learning and its real-world applications.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/videos/ml-basics.mp4',
    trailerUrl: '/videos/ml-basics-trailer.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'AI Ethics and Society',
    description: 'Exploring the ethical implications of artificial intelligence in modern society.',
    genre: ['Documentary', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 55m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/videos/ai-ethics.mp4',
    trailerUrl: '/videos/ai-ethics-trailer.mp4',
    likes: 634
  },
  {
    id: '4',
    title: 'Computer Vision Revolution',
    description: 'How computer vision is transforming industries from healthcare to autonomous vehicles.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/videos/computer-vision.mp4',
    trailerUrl: '/videos/computer-vision-trailer.mp4',
    likes: 923
  },
  {
    id: '5',
    title: 'Natural Language Processing',
    description: 'Understanding how machines learn to process and understand human language.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/videos/nlp.mp4',
    trailerUrl: '/videos/nlp-trailer.mp4',
    likes: 567
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trend-1',
        title: 'AI Startup Success Stories',
        description: 'Inspiring stories of AI startups that changed the world.',
        genre: ['Business', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: '/src/assets/11.jpg',
        backdrop: '/src/assets/11.jpg',
        videoUrl: '/videos/startup-stories.mp4',
        trailerUrl: '/videos/startup-stories-trailer.mp4',
        likes: 1123
      },
      {
        id: 'trend-2',
        title: 'Quantum Computing Breakthrough',
        description: 'The latest developments in quantum computing and its potential impact.',
        genre: ['Technology', 'Science'],
        year: 2024,
        rating: 'PG-13',
        duration: '2h 20m',
        thumbnail: '/src/assets/12.jpg',
        backdrop: '/src/assets/12.jpg',
        videoUrl: '/videos/quantum-computing.mp4',
        trailerUrl: '/videos/quantum-computing-trailer.mp4',
        likes: 845
      },
      {
        id: 'trend-3',
        title: 'Robotics in Healthcare',
        description: 'How robots are revolutionizing medical procedures and patient care.',
        genre: ['Technology', 'Healthcare'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: '/src/assets/13.jpg',
        backdrop: '/src/assets/13.jpg',
        videoUrl: '/videos/robotics-healthcare.mp4',
        trailerUrl: '/videos/robotics-healthcare-trailer.mp4',
        likes: 712
      },
      {
        id: 'trend-4',
        title: 'Blockchain and AI Integration',
        description: 'Exploring the synergy between blockchain technology and artificial intelligence.',
        genre: ['Technology', 'Finance'],
        year: 2024,
        rating: 'PG-13',
        duration: '1h 35m',
        thumbnail: '/src/assets/14.jpg',
        backdrop: '/src/assets/14.jpg',
        videoUrl: '/videos/blockchain-ai.mp4',
        trailerUrl: '/videos/blockchain-ai-trailer.mp4',
        likes: 598
      },
      {
        id: 'trend-5',
        title: 'Autonomous Vehicle Technology',
        description: 'The future of transportation with self-driving cars and AI navigation.',
        genre: ['Technology', 'Transportation'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: '/src/assets/15.jpg',
        backdrop: '/src/assets/15.jpg',
        videoUrl: '/videos/autonomous-vehicles.mp4',
        trailerUrl: '/videos/autonomous-vehicles-trailer.mp4',
        likes: 934
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with the most liked movies
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};