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
  description: 'Stay updated with the latest developments in AI hackathons and competitions.',
  genre: ['Technology', 'Innovation'],
  year: 2024,
  rating: 'PG',
  duration: '2h 30m',
  thumbnail: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  backdrop: '/src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Innovation Dashboard',
    description: 'Explore cutting-edge AI tools and innovations in this comprehensive dashboard overview.',
    genre: ['Technology', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Visual Builder Interface',
    description: 'Learn how to use advanced visual building tools with import and export capabilities.',
    genre: ['Technology', 'Design'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'AI Interface Canvas',
    description: 'Master the art of creating intuitive AI interfaces with this comprehensive guide.',
    genre: ['Technology', 'UI/UX'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 634
  },
  {
    id: '4',
    title: 'Machine Learning Fundamentals',
    description: 'A comprehensive introduction to machine learning concepts and applications.',
    genre: ['Technology', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '3h 20m',
    thumbnail: '/src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    backdrop: '/src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 1123
  },
  {
    id: '5',
    title: 'Digital Automation Workflows',
    description: 'Learn to create efficient automation workflows for digital processes.',
    genre: ['Technology', 'Automation'],
    year: 2024,
    rating: 'PG',
    duration: '2h 45m',
    thumbnail: '/src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    backdrop: '/src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 987
  },
  {
    id: '6',
    title: 'Revenue Analytics Platform',
    description: 'Advanced analytics and revenue tracking for modern businesses.',
    genre: ['Business', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: '/src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    backdrop: '/src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 543
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'AI Innovation Trends',
        description: 'Discover the latest trends in artificial intelligence and machine learning.',
        genre: ['Technology', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '2h 10m',
        thumbnail: '/src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
        backdrop: '/src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 1456
      },
      {
        id: 'trending-2',
        title: 'Email Automation Systems',
        description: 'Advanced email automation with AI-powered insights and analytics.',
        genre: ['Technology', 'Marketing'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: '/src/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
        backdrop: '/src/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 823
      },
      {
        id: 'trending-3',
        title: 'Digital Funnel Builder',
        description: 'Create powerful sales funnels with drag-and-drop functionality.',
        genre: ['Business', 'Marketing'],
        year: 2024,
        rating: 'PG',
        duration: '2h 25m',
        thumbnail: '/src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
        backdrop: '/src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 1089
      },
      {
        id: 'trending-4',
        title: 'Workflow Visualization',
        description: 'Advanced workflow management with visual flowchart interfaces.',
        genre: ['Technology', 'Productivity'],
        year: 2024,
        rating: 'PG',
        duration: '1h 50m',
        thumbnail: '/src/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
        backdrop: '/src/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 756
      },
      {
        id: 'trending-5',
        title: 'Video Personalization',
        description: 'Create personalized video content at scale with AI technology.',
        genre: ['Technology', 'Video'],
        year: 2024,
        rating: 'PG',
        duration: '2h 5m',
        thumbnail: '/src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
        backdrop: '/src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 934
      }
    ]
  },
  {
    id: 'bolt-new',
    title: 'Bolt.new Features',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Innovation Dashboard',
        description: 'Explore cutting-edge AI tools and innovations in this comprehensive dashboard overview.',
        genre: ['Technology', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 892
      },
      {
        id: 'bolt-2',
        title: 'Visual Builder Interface',
        description: 'Learn how to use advanced visual building tools with import and export capabilities.',
        genre: ['Technology', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '2h 15m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 756
      },
      {
        id: 'bolt-3',
        title: 'AI Interface Canvas',
        description: 'Master the art of creating intuitive AI interfaces with this comprehensive guide.',
        genre: ['Technology', 'UI/UX'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 634
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