export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  thumbnail: string;
  backdrop: string;
  videoUrl: string;
  trailerUrl: string;
  isFeatured?: boolean;
  isInMyList?: boolean;
  likes?: number;
}

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon 2024',
  description: 'Join the most innovative AI hackathon of the year where brilliant minds come together to create the future.',
  genre: ['Technology', 'Innovation', 'Competition'],
  year: 2024,
  rating: 'All Ages',
  duration: '48 hours',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: '/videos/hackathon-intro.mp4',
  trailerUrl: '/videos/hackathon-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Innovation Summit',
    description: 'Discover the latest breakthroughs in artificial intelligence and machine learning.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'All Ages',
    duration: '2h 30m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/videos/ai-summit.mp4',
    trailerUrl: '/videos/ai-summit-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Machine Learning Workshop',
    description: 'Hands-on workshop covering the fundamentals of machine learning algorithms.',
    genre: ['Education', 'Workshop'],
    year: 2024,
    rating: 'All Ages',
    duration: '4h 15m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/videos/ml-workshop.mp4',
    trailerUrl: '/videos/ml-workshop-trailer.mp4',
    likes: 654
  },
  {
    id: '3',
    title: 'Deep Learning Masterclass',
    description: 'Advanced techniques in deep learning and neural networks.',
    genre: ['Technology', 'Advanced'],
    year: 2024,
    rating: 'All Ages',
    duration: '3h 45m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/videos/deep-learning.mp4',
    trailerUrl: '/videos/deep-learning-trailer.mp4',
    likes: 1123
  },
  {
    id: '4',
    title: 'Startup Pitch Competition',
    description: 'Watch innovative startups pitch their AI-powered solutions.',
    genre: ['Business', 'Competition'],
    year: 2024,
    rating: 'All Ages',
    duration: '2h 15m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/videos/startup-pitch.mp4',
    trailerUrl: '/videos/startup-pitch-trailer.mp4',
    likes: 789
  },
  {
    id: '5',
    title: 'Tech Innovation Panel',
    description: 'Industry leaders discuss the future of technology and innovation.',
    genre: ['Technology', 'Panel'],
    year: 2024,
    rating: 'All Ages',
    duration: '1h 50m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/videos/tech-panel.mp4',
    trailerUrl: '/videos/tech-panel-trailer.mp4',
    likes: 567
  }
];

export const contentRows = [
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Platforms',
    movies: [
      {
        id: 'ai-1',
        title: 'Neural Network Builder',
        description: 'Interactive platform for building and training neural networks with visual interface.',
        genre: ['AI Tools', 'Development'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/neural-builder.mp4',
        trailerUrl: '/videos/neural-builder-trailer.mp4',
        likes: 945
      },
      {
        id: 'ai-2',
        title: 'AI Model Training Studio',
        description: 'Comprehensive environment for training and deploying machine learning models.',
        genre: ['AI Tools', 'Training'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/training-studio.mp4',
        trailerUrl: '/videos/training-studio-trailer.mp4',
        likes: 823
      },
      {
        id: 'ai-3',
        title: 'Data Visualization Platform',
        description: 'Advanced tools for visualizing complex datasets and AI model outputs.',
        genre: ['AI Tools', 'Visualization'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/data-viz.mp4',
        trailerUrl: '/videos/data-viz-trailer.mp4',
        likes: 712
      },
      {
        id: 'ai-4',
        title: 'AutoML Assistant',
        description: 'Automated machine learning platform that simplifies model creation and optimization.',
        genre: ['AI Tools', 'Automation'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/automl.mp4',
        trailerUrl: '/videos/automl-trailer.mp4',
        likes: 634
      },
      {
        id: 'ai-5',
        title: 'AI Ethics Framework',
        description: 'Comprehensive framework for ensuring ethical AI development and deployment.',
        genre: ['AI Tools', 'Ethics'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-ethics.mp4',
        trailerUrl: '/videos/ai-ethics-trailer.mp4',
        likes: 567
      },
      {
        id: 'ai-6',
        title: 'Cloud AI Services',
        description: 'Scalable cloud-based AI services for enterprise applications.',
        genre: ['AI Tools', 'Cloud'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/cloud-ai.mp4',
        trailerUrl: '/videos/cloud-ai-trailer.mp4',
        likes: 489
      },
      {
        id: 'ai-7',
        title: 'AI Model Marketplace',
        description: 'Discover, share, and deploy pre-trained AI models from the community.',
        genre: ['AI Tools', 'Marketplace'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/model-marketplace.mp4',
        trailerUrl: '/videos/model-marketplace-trailer.mp4',
        likes: 756
      },
      {
        id: 'ai-8',
        title: 'Real-time AI Analytics',
        description: 'Monitor and analyze AI model performance in real-time with advanced metrics.',
        genre: ['AI Tools', 'Analytics'],
        year: 2024,
        rating: 'All Ages',
        duration: 'Interactive',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-analytics.mp4',
        trailerUrl: '/videos/ai-analytics-trailer.mp4',
        likes: 678
      }
    ]
  },
  {
    id: 'workshops',
    title: 'Workshops & Tutorials',
    movies: [
      {
        id: 'workshop-1',
        title: 'Python for AI Beginners',
        description: 'Learn Python programming fundamentals specifically for AI and machine learning applications.',
        genre: ['Education', 'Programming'],
        year: 2024,
        rating: 'Beginner',
        duration: '3h 30m',
        thumbnail: '/src/assets/11.jpg',
        backdrop: '/src/assets/11.jpg',
        videoUrl: '/videos/python-ai.mp4',
        trailerUrl: '/videos/python-ai-trailer.mp4',
        likes: 1456
      },
      {
        id: 'workshop-2',
        title: 'TensorFlow Masterclass',
        description: 'Comprehensive guide to building neural networks with TensorFlow and Keras.',
        genre: ['Education', 'Deep Learning'],
        year: 2024,
        rating: 'Intermediate',
        duration: '5h 15m',
        thumbnail: '/src/assets/12.jpg',
        backdrop: '/src/assets/12.jpg',
        videoUrl: '/videos/tensorflow.mp4',
        trailerUrl: '/videos/tensorflow-trailer.mp4',
        likes: 1234
      },
      {
        id: 'workshop-3',
        title: 'Computer Vision Workshop',
        description: 'Hands-on workshop covering image processing and computer vision techniques.',
        genre: ['Education', 'Computer Vision'],
        year: 2024,
        rating: 'Intermediate',
        duration: '4h 45m',
        thumbnail: '/src/assets/13.jpg',
        backdrop: '/src/assets/13.jpg',
        videoUrl: '/videos/computer-vision.mp4',
        trailerUrl: '/videos/computer-vision-trailer.mp4',
        likes: 987
      },
      {
        id: 'workshop-4',
        title: 'Natural Language Processing',
        description: 'Explore NLP techniques for text analysis and language understanding.',
        genre: ['Education', 'NLP'],
        year: 2024,
        rating: 'Advanced',
        duration: '6h 20m',
        thumbnail: '/src/assets/14.jpg',
        backdrop: '/src/assets/14.jpg',
        videoUrl: '/videos/nlp.mp4',
        trailerUrl: '/videos/nlp-trailer.mp4',
        likes: 876
      },
      {
        id: 'workshop-5',
        title: 'Reinforcement Learning Lab',
        description: 'Interactive lab sessions on reinforcement learning algorithms and applications.',
        genre: ['Education', 'Reinforcement Learning'],
        year: 2024,
        rating: 'Advanced',
        duration: '4h 30m',
        thumbnail: '/src/assets/15.jpg',
        backdrop: '/src/assets/15.jpg',
        videoUrl: '/videos/rl-lab.mp4',
        trailerUrl: '/videos/rl-lab-trailer.mp4',
        likes: 765
      }
    ]
  }
];

export const getMostLikedMovies = (allMovies: Movie[], movieLikes: Record<string, number>) => {
  return allMovies
    .map(movie => ({
      ...movie,
      likes: movieLikes[movie.id] || movie.likes || 0
    }))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};