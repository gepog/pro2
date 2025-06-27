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
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in AI hackathons, innovative projects, and breakthrough technologies.',
  genre: ['Technology', 'Innovation'],
  year: 2024,
  rating: 'PG',
  duration: '45m',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: '/videos/featured.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Innovation Summit',
    description: 'Explore cutting-edge AI technologies and their real-world applications.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/videos/movie1.mp4',
    trailerUrl: '/videos/trailer1.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Machine Learning Breakthrough',
    description: 'Discover the latest breakthroughs in machine learning and neural networks.',
    genre: ['Technology', 'Science'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 45m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/videos/movie2.mp4',
    trailerUrl: '/videos/trailer2.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Quantum Computing Revolution',
    description: 'The future of computing through quantum mechanics and advanced algorithms.',
    genre: ['Technology', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '2h 30m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/videos/movie3.mp4',
    trailerUrl: '/videos/trailer3.mp4',
    likes: 1024
  },
  {
    id: '4',
    title: 'Robotics and Automation',
    description: 'How robotics is transforming industries and daily life.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/videos/movie4.mp4',
    trailerUrl: '/videos/trailer4.mp4',
    likes: 634
  },
  {
    id: '5',
    title: 'Blockchain Technology',
    description: 'Understanding blockchain and its impact on digital transactions.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 10m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/videos/movie5.mp4',
    trailerUrl: '/videos/trailer5.mp4',
    likes: 445
  },
  {
    id: '6',
    title: 'Virtual Reality Worlds',
    description: 'Immersive experiences and the future of virtual reality.',
    genre: ['Technology', 'Entertainment'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: '/videos/movie6.mp4',
    trailerUrl: '/videos/trailer6.mp4',
    likes: 789
  },
  {
    id: '7',
    title: 'Cybersecurity Frontiers',
    description: 'Protecting digital assets in an interconnected world.',
    genre: ['Technology', 'Security'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: '/videos/movie7.mp4',
    trailerUrl: '/videos/trailer7.mp4',
    likes: 567
  },
  {
    id: '8',
    title: 'IoT Connected Future',
    description: 'The Internet of Things and smart device ecosystems.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: '/videos/movie8.mp4',
    trailerUrl: '/videos/trailer8.mp4',
    likes: 723
  },
  {
    id: '9',
    title: 'Data Science Insights',
    description: 'Extracting meaningful insights from big data.',
    genre: ['Technology', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: '/videos/movie9.mp4',
    trailerUrl: '/videos/trailer9.mp4',
    likes: 856
  },
  {
    id: '10',
    title: 'Cloud Computing Evolution',
    description: 'The transformation of computing infrastructure and services.',
    genre: ['Technology', 'Infrastructure'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: '/videos/movie10.mp4',
    trailerUrl: '/videos/trailer10.mp4',
    likes: 692
  }
];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: movies.slice(0, 6)
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Platforms',
    movies: [
      {
        id: 'ai-tool-1',
        title: 'Neural Network Builder',
        description: 'Advanced interface for building and training neural networks with intuitive drag-and-drop functionality.',
        genre: ['AI Tools', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-tool-1.mp4',
        trailerUrl: '/videos/ai-tool-1-trailer.mp4',
        likes: 1156
      },
      {
        id: 'ai-tool-2',
        title: 'Visual Builder Platform',
        description: 'Import and organize your AI models with this sleek visual builder interface featuring seamless data flow.',
        genre: ['AI Tools', 'Platform'],
        year: 2024,
        rating: 'PG',
        duration: '25m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/ai-tool-2.mp4',
        trailerUrl: '/videos/ai-tool-2-trailer.mp4',
        likes: 934
      },
      {
        id: 'ai-tool-3',
        title: 'Trending Prompt Chains',
        description: 'Dashboard showcasing the most popular AI prompt chains with golden highlights and advanced analytics.',
        genre: ['AI Tools', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '35m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/ai-tool-3.mp4',
        trailerUrl: '/videos/ai-tool-3-trailer.mp4',
        likes: 1287
      },
      {
        id: 'ai-tool-4',
        title: 'AI Model Training Hub',
        description: 'Comprehensive platform for training and deploying machine learning models with real-time monitoring.',
        genre: ['AI Tools', 'Training'],
        year: 2024,
        rating: 'PG',
        duration: '40m',
        thumbnail: '/src/assets/31.png',
        backdrop: '/src/assets/31.png',
        videoUrl: '/videos/ai-tool-4.mp4',
        trailerUrl: '/videos/ai-tool-4-trailer.mp4',
        likes: 876
      },
      {
        id: 'ai-tool-5',
        title: 'Data Pipeline Manager',
        description: 'Streamline your data processing workflows with this advanced pipeline management system.',
        genre: ['AI Tools', 'Data'],
        year: 2024,
        rating: 'PG',
        duration: '28m',
        thumbnail: '/src/assets/32.png',
        backdrop: '/src/assets/32.png',
        videoUrl: '/videos/ai-tool-5.mp4',
        trailerUrl: '/videos/ai-tool-5-trailer.mp4',
        likes: 743
      },
      {
        id: 'ai-tool-6',
        title: 'Model Performance Analytics',
        description: 'Advanced analytics dashboard for monitoring AI model performance and optimization metrics.',
        genre: ['AI Tools', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '32m',
        thumbnail: '/src/assets/33.png',
        backdrop: '/src/assets/33.png',
        videoUrl: '/videos/ai-tool-6.mp4',
        trailerUrl: '/videos/ai-tool-6-trailer.mp4',
        likes: 1098
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  },
  {
    id: 'tech-innovations',
    title: 'Tech Innovations',
    movies: movies.slice(6, 10)
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};