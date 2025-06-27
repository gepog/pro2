export const featuredMovie = {
  id: 'featured-1',
  title: 'The Future of AI',
  description: 'An in-depth exploration of artificial intelligence and its impact on society.',
  genre: ['Documentary', 'Technology'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
  backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
  videoUrl: '/videos/featured-movie.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies = [
  {
    id: 'movie-1',
    title: 'Digital Revolution',
    description: 'The story of how technology transformed our world.',
    genre: ['Documentary', 'History'],
    year: 2023,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie-1.mp4',
    trailerUrl: '/videos/trailer-1.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Code Warriors',
    description: 'Elite programmers compete in the ultimate coding challenge.',
    genre: ['Drama', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 10m',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie-2.mp4',
    trailerUrl: '/videos/trailer-2.mp4',
    likes: 1456
  },
  {
    id: 'movie-3',
    title: 'Neural Networks',
    description: 'A deep dive into machine learning and artificial intelligence.',
    genre: ['Educational', 'Science'],
    year: 2023,
    rating: 'G',
    duration: '1h 30m',
    thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie-3.mp4',
    trailerUrl: '/videos/trailer-3.mp4',
    likes: 743
  },
  {
    id: 'movie-4',
    title: 'Quantum Computing',
    description: 'Exploring the next frontier of computational power.',
    genre: ['Science', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie-4.mp4',
    trailerUrl: '/videos/trailer-4.mp4',
    likes: 1089
  },
  {
    id: 'movie-5',
    title: 'Cybersecurity Chronicles',
    description: 'The ongoing battle between hackers and defenders.',
    genre: ['Thriller', 'Technology'],
    year: 2023,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie-5.mp4',
    trailerUrl: '/videos/trailer-5.mp4',
    likes: 967
  },
  {
    id: 'movie-6',
    title: 'Data Science Decoded',
    description: 'Understanding the power of big data and analytics.',
    genre: ['Educational', 'Technology'],
    year: 2024,
    rating: 'G',
    duration: '1h 40m',
    thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=500',
    backdrop: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie-6.mp4',
    trailerUrl: '/videos/trailer-6.mp4',
    likes: 654
  }
];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'AI Revolution 2024',
        description: 'The latest developments in artificial intelligence.',
        genre: ['Documentary', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending-1.mp4',
        trailerUrl: '/videos/trending-trailer-1.mp4',
        likes: 2341
      },
      {
        id: 'trending-2',
        title: 'Machine Learning Mastery',
        description: 'Advanced techniques in machine learning.',
        genre: ['Educational', 'Technology'],
        year: 2024,
        rating: 'G',
        duration: '2h 20m',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending-2.mp4',
        trailerUrl: '/videos/trending-trailer-2.mp4',
        likes: 1876
      },
      {
        id: 'trending-3',
        title: 'Blockchain Basics',
        description: 'Understanding cryptocurrency and blockchain technology.',
        genre: ['Educational', 'Finance'],
        year: 2023,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending-3.mp4',
        trailerUrl: '/videos/trending-trailer-3.mp4',
        likes: 1432
      },
      {
        id: 'trending-4',
        title: 'Cloud Computing Future',
        description: 'The evolution of cloud infrastructure.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending-4.mp4',
        trailerUrl: '/videos/trending-trailer-4.mp4',
        likes: 1098
      },
      {
        id: 'trending-5',
        title: 'IoT Innovations',
        description: 'Internet of Things transforming daily life.',
        genre: ['Technology', 'Lifestyle'],
        year: 2024,
        rating: 'G',
        duration: '1h 25m',
        thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending-5.mp4',
        trailerUrl: '/videos/trending-trailer-5.mp4',
        likes: 876
      },
      {
        id: 'trending-6',
        title: 'Robotics Revolution',
        description: 'How robots are changing manufacturing.',
        genre: ['Technology', 'Industry'],
        year: 2023,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=500',
        backdrop: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending-6.mp4',
        trailerUrl: '/videos/trending-trailer-6.mp4',
        likes: 1234
      }
    ]
  },
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Canvas Builder',
        description: 'Create stunning AI-powered interfaces with drag-and-drop simplicity.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'G',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/bolt-1.mp4',
        trailerUrl: '/videos/bolt-trailer-1.mp4',
        likes: 1567
      },
      {
        id: 'bolt-2',
        title: 'Import & Export Hub',
        description: 'Seamlessly transfer data between platforms with visual workflow management.',
        genre: ['Technology', 'Productivity'],
        year: 2024,
        rating: 'G',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/bolt-2.mp4',
        trailerUrl: '/videos/bolt-trailer-2.mp4',
        likes: 1234
      },
      {
        id: 'bolt-3',
        title: 'Trending Prompt Chains',
        description: 'Discover the most popular AI prompt sequences and automation workflows.',
        genre: ['Technology', 'AI'],
        year: 2024,
        rating: 'G',
        duration: '1h 20m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/bolt-3.mp4',
        trailerUrl: '/videos/bolt-trailer-3.mp4',
        likes: 1890
      },
      {
        id: 'bolt-4',
        title: 'Revenue Analytics Dashboard',
        description: 'Track your earnings with advanced analytics and golden insights.',
        genre: ['Business', 'Analytics'],
        year: 2024,
        rating: 'G',
        duration: '1h 35m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/bolt-4.mp4',
        trailerUrl: '/videos/bolt-trailer-4.mp4',
        likes: 1456
      },
      {
        id: 'bolt-5',
        title: 'Smart Text Processor',
        description: 'Transform text into dynamic content with AI-powered processing tools.',
        genre: ['Technology', 'Writing'],
        year: 2024,
        rating: 'G',
        duration: '1h 25m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/bolt-5.mp4',
        trailerUrl: '/videos/bolt-trailer-5.mp4',
        likes: 1123
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with the most liked movies
  }
];

export const getMostLikedMovies = () => {
  const allMovies = [...movies];
  
  // Add movies from content rows
  contentRows.forEach(row => {
    if (row.id !== 'most-liked') {
      row.movies.forEach(movie => {
        if (!allMovies.find(m => m.id === movie.id)) {
          allMovies.push(movie);
        }
      });
    }
  });
  
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};