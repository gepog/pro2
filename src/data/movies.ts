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

export interface ContentRow {
  id: string;
  title: string;
  movies: Movie[];
}

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in AI hackathons, innovative projects, and breakthrough technologies.',
  genre: ['Technology', 'Innovation'],
  year: 2024,
  rating: 'PG',
  duration: '2h 15m',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: '/videos/featured.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'AI Interface Design',
    description: 'Explore the future of user interface design with AI-powered tools and innovative interaction patterns.',
    genre: ['Technology', 'Design'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: '/videos/movie1.mp4',
    trailerUrl: '/videos/movie1-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Visual Builder Platform',
    description: 'Discover how visual builders are revolutionizing app development with drag-and-drop interfaces.',
    genre: ['Technology', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/movie2.mp4',
    trailerUrl: '/videos/movie2-trailer.mp4',
    likes: 1156
  },
  {
    id: 'movie-3',
    title: 'Trending AI Dashboards',
    description: 'Learn about the latest trends in AI-powered dashboard design and data visualization techniques.',
    genre: ['Technology', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/movie3.mp4',
    trailerUrl: '/videos/movie3-trailer.mp4',
    likes: 743
  },
  {
    id: 'movie-4',
    title: 'Dynamic UI Components',
    description: 'Explore dynamic user interface components featuring interactive icons and modern design patterns.',
    genre: ['Technology', 'UI/UX'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/movie4.mp4',
    trailerUrl: '/videos/movie4-trailer.mp4',
    likes: 634
  },
  {
    id: 'movie-5',
    title: 'Text-to-Video Generation',
    description: 'Discover the cutting-edge technology behind text-to-video generation and AI content creation.',
    genre: ['Technology', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: '/videos/movie5.mp4',
    trailerUrl: '/videos/movie5-trailer.mp4',
    likes: 987
  },
  // Additional movies for other carousels
  {
    id: 'movie-6',
    title: 'Machine Learning Basics',
    description: 'An introduction to machine learning concepts and practical applications.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie6.mp4',
    trailerUrl: '/videos/movie6-trailer.mp4',
    likes: 521
  },
  {
    id: 'movie-7',
    title: 'Data Science Revolution',
    description: 'How data science is transforming industries and creating new opportunities.',
    genre: ['Education', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '2h 20m',
    thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie7.mp4',
    trailerUrl: '/videos/movie7-trailer.mp4',
    likes: 789
  },
  {
    id: 'movie-8',
    title: 'Blockchain Technology',
    description: 'Understanding blockchain technology and its impact on digital transactions.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/movie8.mp4',
    trailerUrl: '/videos/movie8-trailer.mp4',
    likes: 456
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Interface Design',
        description: 'Explore the future of user interface design with AI-powered tools and innovative interaction patterns.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/bolt1.mp4',
        trailerUrl: '/videos/bolt1-trailer.mp4',
        likes: 892
      },
      {
        id: 'bolt-2',
        title: 'Visual Builder Platform',
        description: 'Discover how visual builders are revolutionizing app development with drag-and-drop interfaces.',
        genre: ['Technology', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '2h 10m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/bolt2.mp4',
        trailerUrl: '/videos/bolt2-trailer.mp4',
        likes: 1156
      },
      {
        id: 'bolt-3',
        title: 'Trending AI Dashboards',
        description: 'Learn about the latest trends in AI-powered dashboard design and data visualization techniques.',
        genre: ['Technology', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/bolt3.mp4',
        trailerUrl: '/videos/bolt3-trailer.mp4',
        likes: 743
      },
      {
        id: 'bolt-4',
        title: 'Dynamic UI Components',
        description: 'Explore dynamic user interface components featuring interactive icons and modern design patterns.',
        genre: ['Technology', 'UI/UX'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/bolt4.mp4',
        trailerUrl: '/videos/bolt4-trailer.mp4',
        likes: 634
      },
      {
        id: 'bolt-5',
        title: 'Text-to-Video Generation',
        description: 'Discover the cutting-edge technology behind text-to-video generation and AI content creation.',
        genre: ['Technology', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '2h 5m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/bolt5.mp4',
        trailerUrl: '/videos/bolt5-trailer.mp4',
        likes: 987
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with most liked movies
  },
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'Quantum Computing Explained',
        description: 'A comprehensive guide to quantum computing and its potential applications.',
        genre: ['Science', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '2h 30m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending1.mp4',
        trailerUrl: '/videos/trending1-trailer.mp4',
        likes: 1423
      },
      {
        id: 'trending-2',
        title: 'Cybersecurity Fundamentals',
        description: 'Essential cybersecurity practices for the modern digital world.',
        genre: ['Technology', 'Security'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending2.mp4',
        trailerUrl: '/videos/trending2-trailer.mp4',
        likes: 967
      },
      {
        id: 'trending-3',
        title: 'Cloud Computing Revolution',
        description: 'How cloud computing is reshaping business infrastructure and operations.',
        genre: ['Technology', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/trending3.mp4',
        trailerUrl: '/videos/trending3-trailer.mp4',
        likes: 1234
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