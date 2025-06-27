import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in AI hackathons, innovative projects, and breakthrough technologies.',
  genre: ['Technology', 'Innovation'],
  year: 2024,
  rating: 'PG',
  duration: '2h 30m',
  thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
  backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
  videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Revolution',
    description: 'Explore the cutting-edge developments in artificial intelligence and machine learning.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Machine Learning Mastery',
    description: 'Deep dive into the world of machine learning algorithms and their real-world applications.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Neural Networks Explained',
    description: 'Understanding the fundamentals of neural networks and deep learning architectures.',
    genre: ['Technology', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 634
  },
  {
    id: '4',
    title: 'Data Science Fundamentals',
    description: 'Learn the essential concepts and tools used in modern data science.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '2h 0m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 523
  },
  {
    id: '5',
    title: 'Computer Vision Breakthrough',
    description: 'Discover the latest advances in computer vision and image recognition technology.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 445
  },
  {
    id: '6',
    title: 'Natural Language Processing',
    description: 'Explore how machines understand and process human language.',
    genre: ['Technology', 'Linguistics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 378
  },
  {
    id: '7',
    title: 'Robotics and AI',
    description: 'The intersection of robotics and artificial intelligence in modern automation.',
    genre: ['Technology', 'Robotics'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 312
  },
  {
    id: '8',
    title: 'Quantum Computing Basics',
    description: 'Introduction to quantum computing and its potential impact on AI.',
    genre: ['Technology', 'Physics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 267
  },
  {
    id: '9',
    title: 'AI Ethics and Society',
    description: 'Examining the ethical implications of artificial intelligence in society.',
    genre: ['Technology', 'Ethics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 198
  },
  {
    id: '10',
    title: 'Future of AI',
    description: 'Predictions and possibilities for the future of artificial intelligence.',
    genre: ['Technology', 'Futurism'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 156
  },
  {
    id: '11',
    title: 'Blockchain and AI',
    description: 'How blockchain technology is revolutionizing AI development and deployment.',
    genre: ['Technology', 'Blockchain'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 134
  },
  {
    id: '12',
    title: 'AI in Healthcare',
    description: 'Revolutionary applications of AI in medical diagnosis and treatment.',
    genre: ['Technology', 'Healthcare'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    likes: 112
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: []
  },
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    movies: [
      {
        id: 'ai-fund-1',
        title: 'Introduction to Machine Learning',
        description: 'A comprehensive guide to understanding machine learning concepts and applications.',
        genre: ['Technology', 'Education'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 423
      },
      {
        id: 'ai-fund-2',
        title: 'Deep Learning Essentials',
        description: 'Master the fundamentals of deep learning and neural network architectures.',
        genre: ['Technology', 'Science'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 356
      },
      {
        id: 'ai-fund-3',
        title: 'Python for AI',
        description: 'Learn Python programming specifically for artificial intelligence applications.',
        genre: ['Technology', 'Programming'],
        year: 2024,
        rating: 'PG',
        duration: '2h 30m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 289
      },
      {
        id: 'ai-fund-4',
        title: 'Statistics for Machine Learning',
        description: 'Essential statistical concepts every machine learning practitioner should know.',
        genre: ['Technology', 'Mathematics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 234
      },
      {
        id: 'ai-fund-5',
        title: 'Data Preprocessing Techniques',
        description: 'Learn how to clean, transform, and prepare data for machine learning models.',
        genre: ['Technology', 'Data Science'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 187
      },
      {
        id: 'ai-fund-6',
        title: 'Model Evaluation and Validation',
        description: 'Understand how to properly evaluate and validate machine learning models.',
        genre: ['Technology', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 156
      }
    ]
  },
  {
    id: 'advanced-topics',
    title: 'Advanced AI Topics',
    movies: [
      {
        id: 'adv-1',
        title: 'Generative Adversarial Networks',
        description: 'Explore the fascinating world of GANs and their applications in AI.',
        genre: ['Technology', 'Advanced'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 345
      },
      {
        id: 'adv-2',
        title: 'Reinforcement Learning',
        description: 'Deep dive into reinforcement learning algorithms and their real-world applications.',
        genre: ['Technology', 'Advanced'],
        year: 2024,
        rating: 'PG',
        duration: '2h 20m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 298
      },
      {
        id: 'adv-3',
        title: 'Transformer Architecture',
        description: 'Understanding the transformer model that revolutionized natural language processing.',
        genre: ['Technology', 'NLP'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 267
      },
      {
        id: 'adv-4',
        title: 'Computer Vision with CNNs',
        description: 'Advanced computer vision techniques using convolutional neural networks.',
        genre: ['Technology', 'Computer Vision'],
        year: 2024,
        rating: 'PG',
        duration: '2h 10m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 223
      },
      {
        id: 'adv-5',
        title: 'AI Model Deployment',
        description: 'Learn how to deploy AI models to production environments.',
        genre: ['Technology', 'DevOps'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 189
      },
      {
        id: 'adv-6',
        title: 'Explainable AI',
        description: 'Understanding and implementing explainable artificial intelligence techniques.',
        genre: ['Technology', 'Ethics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1920',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        trailerUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        likes: 145
      }
    ]
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};