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
  title: 'HACK IT',
  description: 'Join the ultimate AI hackathon where innovation meets competition. Build the future with cutting-edge technology.',
  genre: ['Technology', 'Innovation', 'Competition'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
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
    title: 'The Future of AI',
    description: 'A groundbreaking documentary exploring the possibilities and challenges of artificial intelligence in our modern world.',
    genre: ['Documentary', 'Technology', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 892
  },
  {
    id: '2',
    title: 'Digital Revolution',
    description: 'An in-depth look at how digital transformation is reshaping industries and society.',
    genre: ['Documentary', 'Business', 'Technology'],
    year: 2023,
    rating: 'PG',
    duration: '2h 10m',
    thumbnail: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Code Warriors',
    description: 'Follow elite programmers as they compete in the world\'s most challenging coding competitions.',
    genre: ['Documentary', 'Competition', 'Technology'],
    year: 2024,
    rating: 'PG-13',
    duration: '1h 55m',
    thumbnail: 'https://images.pexels.com/photos/7988080/pexels-photo-7988080.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7988080/pexels-photo-7988080.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 1023
  },
  {
    id: '4',
    title: 'Innovation Labs',
    description: 'Inside the world\'s most secretive tech laboratories where tomorrow\'s breakthroughs are born.',
    genre: ['Documentary', 'Science', 'Innovation'],
    year: 2023,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    likes: 634
  },
  {
    id: '5',
    title: 'Startup Dreams',
    description: 'The inspiring stories of entrepreneurs who dared to dream big and change the world.',
    genre: ['Documentary', 'Business', 'Inspiration'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: 'https://images.pexels.com/photos/7988081/pexels-photo-7988081.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/7988081/pexels-photo-7988081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 945
  },
  {
    id: '6',
    title: 'Quantum Leap',
    description: 'Exploring the mysterious world of quantum computing and its potential to revolutionize everything.',
    genre: ['Documentary', 'Science', 'Technology'],
    year: 2023,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: 'https://images.pexels.com/photos/8386435/pexels-photo-8386435.jpeg?auto=compress&cs=tinysrgb&w=400',
    backdrop: 'https://images.pexels.com/photos/8386435/pexels-photo-8386435.jpeg?auto=compress&cs=tinysrgb&w=1200',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    likes: 723
  }
];

export const contentRows = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'Tech Titans',
        description: 'The rise and fall of technology\'s biggest names.',
        genre: ['Documentary', 'Biography'],
        year: 2024,
        rating: 'PG-13',
        duration: '2h 20m',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 1456
      },
      {
        id: 'trending-2',
        title: 'Cyber Security Chronicles',
        description: 'Real stories from the front lines of digital warfare.',
        genre: ['Documentary', 'Thriller'],
        year: 2024,
        rating: 'PG-13',
        duration: '1h 50m',
        thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: 1234
      },
      {
        id: 'trending-3',
        title: 'The Algorithm',
        description: 'How artificial intelligence is reshaping our daily lives.',
        genre: ['Documentary', 'Technology'],
        year: 2023,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: 987
      },
      {
        id: 'trending-4',
        title: 'Space Tech',
        description: 'The technology behind humanity\'s greatest space missions.',
        genre: ['Documentary', 'Science'],
        year: 2024,
        rating: 'PG',
        duration: '2h 0m',
        thumbnail: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: 1567
      },
      {
        id: 'trending-5',
        title: 'Green Tech Revolution',
        description: 'Sustainable technology solutions for a better tomorrow.',
        genre: ['Documentary', 'Environment'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: 'https://images.pexels.com/photos/7988082/pexels-photo-7988082.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7988082/pexels-photo-7988082.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: 823
      },
      {
        id: 'trending-6',
        title: 'Digital Nomads',
        description: 'The new workforce reshaping how we think about work and life.',
        genre: ['Documentary', 'Lifestyle'],
        year: 2023,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        likes: 692
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically based on likes
  },
  {
    id: 'bolt-new',
    title: 'Bolt.new',
    movies: [
      {
        id: 'bolt-1',
        title: 'AI Dashboard Analytics',
        description: 'Advanced analytics dashboard showcasing trending prompt chains and AI performance metrics.',
        genre: ['Technology', 'Analytics', 'AI'],
        year: 2024,
        rating: 'PG',
        duration: '1h 30m',
        thumbnail: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        backdrop: '/src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: 1123
      },
      {
        id: 'bolt-2',
        title: 'Visual Builder Interface',
        description: 'Innovative import modal and visual builder UI panel for seamless user experience.',
        genre: ['Technology', 'Design', 'UI/UX'],
        year: 2024,
        rating: 'PG',
        duration: '1h 45m',
        thumbnail: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        backdrop: '/src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: 956
      },
      {
        id: 'bolt-3',
        title: 'Interactive Canvas Design',
        description: 'Semi-transparent interface blocks and user canvas design for modern applications.',
        genre: ['Technology', 'Design', 'Interface'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        backdrop: '/src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: 834
      },
      {
        id: 'bolt-4',
        title: 'Modern Web Development',
        description: 'Cutting-edge web development techniques and best practices.',
        genre: ['Technology', 'Development', 'Web'],
        year: 2024,
        rating: 'PG',
        duration: '2h 10m',
        thumbnail: 'https://images.pexels.com/photos/7988083/pexels-photo-7988083.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7988083/pexels-photo-7988083.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: 1245
      },
      {
        id: 'bolt-5',
        title: 'Cloud Architecture',
        description: 'Scalable cloud solutions and architecture patterns for modern applications.',
        genre: ['Technology', 'Cloud', 'Architecture'],
        year: 2024,
        rating: 'PG',
        duration: '1h 55m',
        thumbnail: 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: 1087
      },
      {
        id: 'bolt-6',
        title: 'DevOps Mastery',
        description: 'Advanced DevOps practices and automation strategies.',
        genre: ['Technology', 'DevOps', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 40m',
        thumbnail: 'https://images.pexels.com/photos/7988084/pexels-photo-7988084.jpeg?auto=compress&cs=tinysrgb&w=400',
        backdrop: 'https://images.pexels.com/photos/7988084/pexels-photo-7988084.jpeg?auto=compress&cs=tinysrgb&w=1200',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        likes: 923
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