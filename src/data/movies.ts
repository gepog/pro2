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
    description: 'Explore cutting-edge AI technologies and their real-world applications in this comprehensive overview.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '32m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: '/videos/ai-innovation.mp4',
    trailerUrl: '/videos/ai-innovation-trailer.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Visual Builder Platform',
    description: 'Discover how visual builders are revolutionizing app development with drag-and-drop interfaces.',
    genre: ['Technology', 'Development'],
    year: 2024,
    rating: 'PG',
    duration: '28m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/visual-builder.mp4',
    trailerUrl: '/videos/visual-builder-trailer.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Trending Prompt Chains',
    description: 'Learn about the latest trends in AI prompt engineering and chain optimization techniques.',
    genre: ['AI', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/prompt-chains.mp4',
    trailerUrl: '/videos/prompt-chains-trailer.mp4',
    likes: 1034
  },
  {
    id: 'movie-4',
    title: 'Revenue Analytics Dashboard',
    description: 'Comprehensive guide to building and interpreting revenue analytics dashboards for business growth.',
    genre: ['Business', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '42m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/revenue-analytics.mp4',
    trailerUrl: '/videos/revenue-analytics-trailer.mp4',
    likes: 923
  },
  {
    id: 'movie-5',
    title: 'Text-to-Video Generation',
    description: 'Explore the revolutionary technology behind text-to-video AI generation and its creative possibilities.',
    genre: ['AI', 'Creative'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: '/videos/text-to-video.mp4',
    trailerUrl: '/videos/text-to-video-trailer.mp4',
    likes: 1187
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: movies
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: []
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};