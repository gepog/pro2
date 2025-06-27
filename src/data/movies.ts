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
  description: 'Stay updated with the latest developments in AI hackathons and innovation challenges.',
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
    id: 'movie-1',
    title: 'AI Innovation Summit',
    description: 'Explore cutting-edge AI technologies and their real-world applications.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/ai-summit.mp4',
    trailerUrl: '/videos/ai-summit-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Machine Learning Masterclass',
    description: 'Deep dive into advanced machine learning algorithms and techniques.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '3h 45m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/ml-masterclass.mp4',
    trailerUrl: '/videos/ml-masterclass-trailer.mp4',
    likes: 1456
  },
  {
    id: 'movie-3',
    title: 'Startup Pitch Competition',
    description: 'Watch innovative startups present their groundbreaking ideas.',
    genre: ['Business', 'Competition'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/startup-pitch.mp4',
    trailerUrl: '/videos/startup-pitch-trailer.mp4',
    likes: 734
  },
  {
    id: 'movie-4',
    title: 'Blockchain Revolution',
    description: 'Understanding the impact of blockchain technology on various industries.',
    genre: ['Technology', 'Finance'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/blockchain.mp4',
    trailerUrl: '/videos/blockchain-trailer.mp4',
    likes: 623
  },
  {
    id: 'movie-5',
    title: 'Quantum Computing Explained',
    description: 'A comprehensive guide to quantum computing and its future applications.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: '/videos/quantum.mp4',
    trailerUrl: '/videos/quantum-trailer.mp4',
    likes: 987
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'AI Ethics Panel',
        description: 'Leading experts discuss the ethical implications of artificial intelligence.',
        genre: ['Technology', 'Ethics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/ai-ethics.mp4',
        trailerUrl: '/videos/ai-ethics-trailer.mp4',
        likes: 567
      },
      {
        id: 'trending-2',
        title: 'Future of Work',
        description: 'How technology is reshaping the modern workplace.',
        genre: ['Business', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '55m',
        thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/future-work.mp4',
        trailerUrl: '/videos/future-work-trailer.mp4',
        likes: 423
      },
      {
        id: 'trending-3',
        title: 'Cybersecurity Essentials',
        description: 'Essential cybersecurity practices for the digital age.',
        genre: ['Technology', 'Security'],
        year: 2024,
        rating: 'PG-13',
        duration: '1h 35m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/cybersecurity.mp4',
        trailerUrl: '/videos/cybersecurity-trailer.mp4',
        likes: 789
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
        description: 'Revolutionary AI-powered interface for creating dynamic user experiences with intelligent block placement and visual design tools.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ai-canvas.mp4',
        trailerUrl: '/videos/ai-canvas-trailer.mp4',
        likes: 1234
      },
      {
        id: 'bolt-2',
        title: 'Visual Import System',
        description: 'Advanced visual builder showcasing seamless import functionality with intuitive modal interfaces and streamlined workflow integration.',
        genre: ['Technology', 'Productivity'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/import-system.mp4',
        trailerUrl: '/videos/import-system-trailer.mp4',
        likes: 987
      },
      {
        id: 'bolt-3',
        title: 'Trending Prompt Chains',
        description: 'Sleek dashboard interface highlighting trending prompt chains with golden accents and modern analytics visualization for enhanced user engagement.',
        genre: ['Technology', 'Analytics'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/prompt-chains.mp4',
        trailerUrl: '/videos/prompt-chains-trailer.mp4',
        likes: 756
      },
      {
        id: 'bolt-4',
        title: 'Dynamic UI Panel',
        description: 'Dynamic interface panel featuring three key icons including gold coin stack visualization, perfect for financial and educational applications.',
        genre: ['Technology', 'Finance'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/dynamic-panel.mp4',
        trailerUrl: '/videos/dynamic-panel-trailer.mp4',
        likes: 645
      },
      {
        id: 'bolt-5',
        title: 'Text Prompt Interface',
        description: 'Sleek UI canvas featuring semi-transparent dark-blue text prompt blocks, designed for optimal user interaction and content creation workflows.',
        genre: ['Technology', 'Content'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/text-prompt.mp4',
        trailerUrl: '/videos/text-prompt-trailer.mp4',
        likes: 534
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  }
];

export const getMostLikedMovies = () => {
  const allMovies = [...movies];
  contentRows.forEach(row => {
    if (row.id !== 'most-liked') {
      allMovies.push(...row.movies);
    }
  });
  
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};