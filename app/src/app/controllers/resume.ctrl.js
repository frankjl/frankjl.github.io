export default ['$window', '$sce', function ResumeController($window, $sce) {
  this.animateIn = ($el) => {
    $el.removeClass('hidden');
    $el.addClass('animated zoomIn');
  }
  this.animateOut = ($el) => {
  }
  this.handle = (position) => {
    if (position.url) {
      $window.open(position.url, '_blank');
    }
  }
  this.positions = [
    {
      title: 'Chief Technology Officer',
      badgeClass: 'cx-blue',
      subheader: 'July 2016 - current',
      items: [
        'Research & adopt new technologies to scale the business; prototyping when appropriate.',
        'External face of the company regarding science and technology.  Promote a technology friendly culture.',
        'Lead technology and architecture discussions, interface with product to ensure alignment.',
        'Technical advisor to the CEO.',
      ],
    },
    {
      title: 'Scaling Engineering Teams',
      class: 'hidden-print',
      badgeClass: 'youtube',
      subheader: 'Lessons learned in scaling CrossChx\' Engineering team.  ScaleTech, November 2016',
      video: {
        url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/VSw5vONlU9A')
      }
    },
    {
      title: 'CrossChx Connect',
      class: 'hidden-print',
      badgeClass: 'cx-blue',
      subheader: 'Product design, architecture & implementation',
      video: {
        url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/pNg_SSoNMgI')
      }
    },
    {
      title: 'Vice President, Engineering',
      badgeClass: 'cx-blue',
      subheader: 'August 2015 - July 2016',
      items: [
        'Recruit and retain top technical talent from all over the country.',
        'Grow the engineering organization to support over 30 engineers and 4 products within 9 months.',
        'Lead technology and architecture discussions.',
      ],
    },
    {
      title: 'Director, Software Engineering',
      badgeClass: 'cx-blue',
      subheader: 'January 2015 - August 2016',
      items: [
        'Managed day-to-day delivery of engineering organization.',
        'Created & monitored process health to ensure lean, flexible execution.'
      ]
    },
    {
      title: 'CrossChx Biometrics',
      badgeClass: 'cx-blue',
      class: 'hidden-print',
      subheader: 'Product architecture, development and implementation',
      video: {
        url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/LAPKMC8B9a0')
      }
    },
    {
      title: 'Team Captain',
      badgeClass: 'cx-blue',
      subheader: 'December 2013 - January 2015',
      items: [
        'Build and deliver amazing software and ludicrous speed.',
      ]
    },
    {
      title: 'Abstract: Transforming Research Program Management',
      subheader: 'From a Ticketing System to a Computerized Research Record (CoRR)',
      badgeClass: 'whitepaper fa fa-file-pdf-o fa-2x',
      class: 'hidden-print',
      description: [
        'An abstract that I co-authored about a software project that we delivered ',
        'to the Center for Clinical & Translation Science at the Ohio State University.'
      ].join(' '),
      url: $sce.trustAsResourceUrl('http://kc-assets.s3.amazonaws.com/AMIA12309/CRI_2014.pdf#page=136')
    },
    {
      title: 'Abstract: A Scalable Approach to Dynamically Populating REDCap',
      subheader: 'Enabling Research Registries from an Enterprise Data Warehouse',
      badgeClass: 'whitepaper fa fa-file-pdf-o fa-2x',
      class: 'hidden-print',
      description: [
        'An abstract that I authored about our attempts to use an existing research',
        'data collection tool (REDCap) with a custom ETL pipeline to enable research ',
        'registries.'
      ].join(' '),
      url: $sce.trustAsResourceUrl('http://kc-assets.s3.amazonaws.com/AMIA12309/CRI_2014.pdf#page=144')
    },
    {
      title: 'Consultant, Biomedical Informatics',
      badgeClass: 'osu-grey',
      subheader: 'April 2012 - December 2013',
      items: [
        'Developer and tech lead and manager of 5 direct reports.',
        'Design, implement & support user-facing web applications written in Ruby on Rails, Java and PHP.',
        'Use industry best UI frameworks such as JQuery, JQuery UI & Bootstrap to create simple, elegant yet robust user interfaces.'
      ]
    },
    {
      title: $sce.trustAsHtml('Multivariate Plugin Framework'),
      icon: 'fa fa-star-o',
      subheader: 'Nationwide Outstanding IT Contribution Nominee',
      badgeClass: 'fa fa-trophy fa-2x',
      description: [
        'In order to facilitate non-biased multivariate testing, we retrofitted an existing Java EE application with a custom-built plugin framework.',
        'This project was a small initiative to prove out the concept & ensure feasibility of such a design.',
        'Built using AspectJ; subsequent development efforts using the framework were able to recognize a 22% increase in the quote-to-bind ratio.'
      ].join(' ')
    },
    {
      title: 'Specialist, IT Applications',
      badgeClass: 'nationwide',
      subheader: 'June 2007 - April 2012',
      items: [
        'Technical Lead for Nationwide\'s customer facing auto insurance application.',
        'Allows customers to customize an automobile insurance quote and bind a policy in almost real-time.',
        'Oversaw 5 development lines using both agile & waterfall methodologies.'
      ]
    },
  ];
  this.skills = [
     { title: 'AngularJS', rating: 5, domain: 'angular.js.org' },
     { title: 'D3.js', rating: 4, domain: 'd3js.org' },
     { title: 'Java, Java EE', rating: 5, domain: 'java.com' },
     { title: 'Spring Framework', rating: 5, domain: 'spring.io' },
     { title: 'Hibernate', rating: 5, domain: 'hibernate.org' },
     { title: 'Relational Databases', rating: 5, domain: 'mysql.com' },
     { title: 'Gradle', rating: 4, domain: 'gradle.org' },
     { title: 'Neo4j & TitanDB', rating: 4, domain: 'neo4j.com' },
     { title: 'ElasticSearch', rating: 4, domain: 'elasticsearch.co' },
     { title: 'HTML, CSS, JS', rating: 4, domain: 'mozilla.org' },
     { title: 'Ruby on Rails', rating: 3, domain: 'rubyonrails.org' },
     { title: 'Git', rating: 4, domain: 'git-scm.com' },
     { title: 'Jenkins', rating: 4, domain: 'jenkins.io' },
     { title: 'Cloud Architecture', rating: 3, icon: 'glyphicon glyphicon-cloud' },
     { title: 'Apache Spark', rating: 3, domain: 'spark.apache.org' },
     { title: 'NodeJS', rating: 4, domain: 'nodejs.org' },
     { title: 'Maven', rating: 5, domain: 'maven.apache.org' },
     { title: 'Docker', rating: 4, domain: 'docker.com' },
     { title: 'Amazon Web Services', rating: 4, domain: 'aws.amazon.com' },
     { title: 'Linux', rating: 5, domain: 'centos.org' },
  ];

  return this;
}];
