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
    id: '1',
    title: 'AI Text-to-Video Generation',
    description: 'Explore the cutting-edge technology of converting text prompts into dynamic video content using advanced AI models.',
    genre: ['AI', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '25m',
    thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: '/videos/ai-text-video.mp4',
    trailerUrl: '/videos/ai-text-video-trailer.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Visual Builder Interface',
    description: 'Learn about modern visual builder interfaces that allow developers to create applications through intuitive drag-and-drop functionality.',
    genre: ['Development', 'UI/UX'],
    year: 2024,
    rating: 'PG',
    duration: '30m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: '/videos/visual-builder.mp4',
    trailerUrl: '/videos/visual-builder-trailer.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Trending Prompt Chains',
    description: 'Discover the most popular and effective prompt chains being used in AI development and how they enhance model performance.',
    genre: ['AI', 'Trends'],
    year: 2024,
    rating: 'PG',
    duration: '22m',
    thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: '/videos/prompt-chains.mp4',
    trailerUrl: '/videos/prompt-chains-trailer.mp4',
    likes: 1034
  },
  {
    id: '4',
    title: 'Revenue Analytics Dashboard',
    description: 'Comprehensive guide to building and interpreting revenue analytics dashboards with key performance indicators.',
    genre: ['Analytics', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: '/videos/revenue-analytics.mp4',
    trailerUrl: '/videos/revenue-analytics-trailer.mp4',
    likes: 623
  },
  {
    id: '5',
    title: 'Advanced UI Canvas Design',
    description: 'Master the art of creating sophisticated user interface canvases with modern design principles and interactive elements.',
    genre: ['Design', 'UI/UX'],
    year: 2024,
    rating: 'PG',
    duration: '28m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: '/videos/ui-canvas.mp4',
    trailerUrl: '/videos/ui-canvas-trailer.mp4',
    likes: 445
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Text-to-Video Generation',
        description: 'Explore the cutting-edge technology of converting text prompts into dynamic video content using advanced AI models.',
        genre: ['AI', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '25m',
        thumbnail: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
        videoUrl: '/videos/ai-text-video.mp4',
        trailerUrl: '/videos/ai-text-video-trailer.mp4',
        likes: 892
      },
      {
        id: 'bolt-2',
        title: 'Visual Builder Interface',
        description: 'Learn about modern visual builder interfaces that allow developers to create applications through intuitive drag-and-drop functionality.',
        genre: ['Development', 'UI/UX'],
        year: 2024,
        rating: 'PG',
        duration: '30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: '/videos/visual-builder.mp4',
        trailerUrl: '/videos/visual-builder-trailer.mp4',
        likes: 756
      },
      {
        id: 'bolt-3',
        title: 'Trending Prompt Chains',
        description: 'Discover the most popular and effective prompt chains being used in AI development and how they enhance model performance.',
        genre: ['AI', 'Trends'],
        year: 2024,
        rating: 'PG',
        duration: '22m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: '/videos/prompt-chains.mp4',
        trailerUrl: '/videos/prompt-chains-trailer.mp4',
        likes: 1034
      },
      {
        id: 'bolt-4',
        title: 'Revenue Analytics Dashboard',
        description: 'Comprehensive guide to building and interpreting revenue analytics dashboards with key performance indicators.',
        genre: ['Analytics', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '35m',
        thumbnail: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        backdrop: '/src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
        videoUrl: '/videos/revenue-analytics.mp4',
        trailerUrl: '/videos/revenue-analytics-trailer.mp4',
        likes: 623
      },
      {
        id: 'bolt-5',
        title: 'Advanced UI Canvas Design',
        description: 'Master the art of creating sophisticated user interface canvases with modern design principles and interactive elements.',
        genre: ['Design', 'UI/UX'],
        year: 2024,
        rating: 'PG',
        duration: '28m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: '/videos/ui-canvas.mp4',
        trailerUrl: '/videos/ui-canvas-trailer.mp4',
        likes: 445
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: []
  }
];

export const getMostLikedMovies = () => {
  return movies.sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 12);
};