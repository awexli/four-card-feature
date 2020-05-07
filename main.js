const app = new Vue({
  el: '#app',
  data: {
    header: {
      top: 'Reliable, efficient delivery',
      bot: 'Powered by Technology',
      sub:
        'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful',
    },
    card: {
      left: {
        title: 'Supervisor',
        sub: 'Monitors activity to identify project roadblocks',
        icon: './images/icon-supervisor.svg',
      },
      middleTop: {
        title: 'Team Builder',
        sub:
          'Scans our talent network to create the optimal team for your project',
        icon: './images/icon-team-builder.svg',
      },
      middleBot: {
        title: 'Karma',
        sub: 'Regularly evaluates our talent to ensure quality',
        icon: './images/icon-karma.svg',
      },
      right: {
        title: 'Calculator',
        sub:
          'Uses data from past projects to provide better delivery estimates',
        icon: './images/icon-calculator.svg',
      },
    },
  },
});
