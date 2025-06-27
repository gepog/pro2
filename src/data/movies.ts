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
  videoUrl: '/videos/featured-movie.mp4',
  trailerUrl: '/videos/featured-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Future of AI',
    description: 'A comprehensive look at artificial intelligence and its impact on society.',
    genre: ['Documentary', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/ai-future.mp4',
    trailerUrl: '/videos/ai-future-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Machine Learning Basics',
    description: 'Learn the fundamentals of machine learning in this beginner-friendly guide.',
    genre: ['Educational', 'Technology'],
    year: 2024,
    rating: 'G',
    duration: '2h 10m',
    thumbnail: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/ml-basics.mp4',
    trailerUrl: '/videos/ml-basics-trailer.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Neural Networks Explained',
    description: 'Deep dive into the world of neural networks and deep learning.',
    genre: ['Educational', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/neural-networks.mp4',
    trailerUrl: '/videos/neural-networks-trailer.mp4',
    likes: 634
  },
  {
    id: '4',
    title: 'Data Science Revolution',
    description: 'How data science is transforming industries across the globe.',
    genre: ['Documentary', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/data-science.mp4',
    trailerUrl: '/videos/data-science-trailer.mp4',
    likes: 923
  },
  {
    id: '5',
    title: 'Robotics and Automation',
    description: 'Exploring the latest advances in robotics and industrial automation.',
    genre: ['Technology', 'Engineering'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: 'https://images.pexels.com/photos/8386435/pexels-photo-8386435.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386435/pexels-photo-8386435.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/robotics.mp4',
    trailerUrl: '/videos/robotics-trailer.mp4',
    likes: 567
  },
  {
    id: '6',
    title: 'Quantum Computing',
    description: 'Understanding the principles and potential of quantum computing.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 20m',
    thumbnail: 'https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/quantum.mp4',
    trailerUrl: '/videos/quantum-trailer.mp4',
    likes: 445
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trend-1',
        title: 'AI Innovation Hub',
        description: 'Discover cutting-edge AI innovations and breakthrough technologies.',
        genre: ['Technology', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-hub.mp4',
        trailerUrl: '/videos/ai-hub-trailer.mp4',
        likes: 1120
      },
      {
        id: 'trend-2',
        title: 'Visual Builder Platform',
        description: 'Learn about modern visual development platforms and import systems.',
        genre: ['Technology', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/visual-builder.mp4',
        trailerUrl: '/videos/visual-builder-trailer.mp4',
        likes: 987
      },
      {
        id: 'trend-3',
        title: 'Trending Prompt Chains',
        description: 'Explore the latest trends in AI prompt engineering and chain systems.',
        genre: ['AI', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/prompt-chains.mp4',
        trailerUrl: '/videos/prompt-chains-trailer.mp4',
        likes: 1456
      },
      {
        id: 'trend-4',
        title: 'Dynamic UI Analytics',
        description: 'Understanding modern UI analytics and key performance indicators.',
        genre: ['Analytics', 'UI/UX'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/ui-analytics.mp4',
        trailerUrl: '/videos/ui-analytics-trailer.mp4',
        likes: 823
      },
      {
        id: 'trend-5',
        title: 'Text Prompt Canvas',
        description: 'Master the art of text prompt design and canvas interfaces.',
        genre: ['Design', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/text-canvas.mp4',
        trailerUrl: '/videos/text-canvas-trailer.mp4',
        likes: 692
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with most liked movies
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};