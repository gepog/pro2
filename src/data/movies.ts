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
    title: 'AI Innovation Hub',
    description: 'Explore cutting-edge AI technologies and their real-world applications.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '42m',
    thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: '/videos/ai-innovation.mp4',
    trailerUrl: '/videos/ai-innovation-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Digital Transformation',
    description: 'Understanding the impact of digital transformation on modern businesses.',
    genre: ['Business', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/digital-transformation.mp4',
    trailerUrl: '/videos/digital-transformation-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Future Analytics',
    description: 'Advanced analytics and data visualization techniques for the future.',
    genre: ['Analytics', 'Data Science'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/future-analytics.mp4',
    trailerUrl: '/videos/future-analytics-trailer.mp4',
    likes: 634
  },
  {
    id: 'movie-4',
    title: 'Import & Integration',
    description: 'Seamless data import and system integration strategies.',
    genre: ['Integration', 'Systems'],
    year: 2024,
    rating: 'PG',
    duration: '40m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/import-integration.mp4',
    trailerUrl: '/videos/import-integration-trailer.mp4',
    likes: 523
  },
  {
    id: 'movie-5',
    title: 'UI Canvas Design',
    description: 'Modern UI design principles and canvas-based interfaces.',
    genre: ['Design', 'UI/UX'],
    year: 2024,
    rating: 'PG',
    duration: '33m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: '/videos/ui-canvas.mp4',
    trailerUrl: '/videos/ui-canvas-trailer.mp4',
    likes: 445
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'Machine Learning Basics',
        description: 'Introduction to machine learning concepts and applications.',
        genre: ['Education', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '28m',
        thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/ml-basics.mp4',
        trailerUrl: '/videos/ml-basics-trailer.mp4',
        likes: 1120
      },
      {
        id: 'trending-2',
        title: 'Blockchain Revolution',
        description: 'Understanding blockchain technology and its impact.',
        genre: ['Technology', 'Finance'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/blockchain.mp4',
        trailerUrl: '/videos/blockchain-trailer.mp4',
        likes: 987
      },
      {
        id: 'trending-3',
        title: 'Cloud Computing',
        description: 'Modern cloud infrastructure and deployment strategies.',
        genre: ['Technology', 'Infrastructure'],
        year: 2024,
        rating: 'PG',
        duration: '52m',
        thumbnail: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/cloud-computing.mp4',
        trailerUrl: '/videos/cloud-computing-trailer.mp4',
        likes: 834
      },
      {
        id: 'trending-4',
        title: 'Cybersecurity Essentials',
        description: 'Essential cybersecurity practices for modern organizations.',
        genre: ['Security', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '41m',
        thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/cybersecurity.mp4',
        trailerUrl: '/videos/cybersecurity-trailer.mp4',
        likes: 723
      },
      {
        id: 'trending-5',
        title: 'Data Visualization',
        description: 'Creating compelling data visualizations and dashboards.',
        genre: ['Data Science', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '36m',
        thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: '/videos/data-viz.mp4',
        trailerUrl: '/videos/data-viz-trailer.mp4',
        likes: 612
      }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Platforms',
    movies: movies
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: []
  }
];

export const getMostLikedMovies = () => {
  const allMovies = [...movies];
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