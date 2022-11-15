// This is just an example,
// so you can safely delete all default props below

export default {
  common: {
    login: 'Login',
    register: 'Register',
    registerWithEmail: 'Register with email',
    connectWithOneClick: 'Connect with one click',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    oldPassword: 'Old Password',
    fullname: 'Full name',
    checks: 'Checks',
    integrations: 'Integrations',
    name: 'Name',
    target: 'Target',
    period: 'Period',
    basicInformation: 'Basic Information',
    status: 'Status',
    enabled: 'Enabled',
    disabled: 'Disabled',
    assignments: 'Assignments',
    uniqueCode: 'Unique Code',
    check: 'Check',
    at: 'at',
    date: 'Date',
    mostRecentsLogs: 'Most recent logs',
    incidentFound: 'Incident found',
    noIncident: 'No incident found in the last hour',
    isNoReachable: 'is not reachable',
    email: 'Email',
    emailConfirmationCode: 'Email confirmation code',
    whatsappConfirmationCode: 'Whatsapp confirmation code',
    termsAndConditions: 'Terms and conditions',
    privacyPolicy: 'Privacy policy',
    confirmationCode: 'Confirmation code',
    code: 'Code',
    details: 'Details',
    month: 'Month',
    plans: 'Plans',
    logsHistory: 'Logs history',
    frequentQuestions: 'Frequent questions',
    subscribed: 'Subscribed',
    profile: 'Profile',
    subscription: 'Subscription',
    viewAllPlans: 'View all plans',
    billing: 'Billing',
    amount: 'Amount',
    TimeInterval: 'Time interval',
    changePassword: 'Change password',
    forgotPassword: 'Forgot password ?',
    recoveryPassword: 'Recovery password',
    pricing: 'Pricing',
    about: 'About',
    openSource: 'Open source',
    contact: 'Contact',
    phone: 'Phone',
    retryOnFail: 'Retry on fail',
    retryOnCheckFail: 'Retry on check fail',
    timezone: 'Timezone',
    authentication: 'Authentication',
    header: 'Header',
    token: 'Token',
  },
  frequentQuestions: {
    whatPaymentAccept: 'What payment methods do you accept?',
    whatPaymentAcceptAnswer: 'We accept all major credit cards, debit cards and PayPal.',
    whatsTheDifferenceBetWeenPlans: 'What`s the difference between "Basic" and "Pay" plans ?',
    whatsTheDifferenceBetWeenPlansAnswer: 'With the "Pay" plans you help me maintain the project and you get more benefits when you have many projects or you are a company.',
    canICancelMyPaymentPlan: 'Can I cancel my payment plan?',
    canICancelMyPaymentPlanAnswer: 'Yes, you can cancel your payment plan at any time, but no refunds are provided for prorated periods.',
    whatIsTheLogsHistoryNumber: 'What is the "logs history" number?',
    whatIsTheLogsHistoryNumberAnswer: 'Each "check" has a limit of "logs" that it can store. Every time the limit is reached, the oldest ones are deleted.',
    whatIsRetryOnCheckFail: 'What is "retry on check fail"?',
    whatIsRetryOnCheckFailAnswer: 'If a check fails, it will be retried every "retry on check fail" minutes. If you have a check that is checked every hour, you can specify a retry every minute if it fails.',
  },
  action: {
    addCheck: 'Add Check',
    editCheck: 'Edit Check',
    save: 'Save',
    checkCreated: 'Check created',
    checkUpdated: 'Check updated',
    addIntegration: 'Add Integration',
    delete: 'Delete',
    noKeepIt: 'No, keep it',
    backToTheList: 'Back to the list',
    integrationCreated: 'Integration created',
    editIntegration: 'Edit Integration',
    integrationUpdated: 'Integration updated',
    requestCode: 'Request code',
    send: 'Send',
    continueToDashboard: 'Continue to dashboard',
    requestNewEmail: 'Request new email',
    viewLogs: 'View logs',
    backToIntegrations: 'Back to integrations',
    addToDiscord: 'Add to Discord',
    select: 'Select',
    backToPlans: 'Back to plans',
    goToHome: 'Go to home',
    cancelSubscription: 'Cancel subscription',
    keepSubscription: 'Keep subscription',
    unsubscribe: 'Unsubscribe',
    sendEmail: 'Send email',
    continue: 'Continue',
    goToLogin: 'Go to login',
    testIntegration: 'Test integration',
    sendTest: 'Send test',
    goBack: 'Go back',
    testSent: 'Test sent',
    saveTimezone: 'Save timezone',
    timezoneSaved: 'Timezone saved',
    checkDisabled: 'Check disabled',
    checkEnabled: 'Check enabled',
    clickHere: 'Click here',
    start: 'Start',
    skip: 'Skip',
    closeTheTour: 'Close the tour'
  },
  messages: {
    onboarding:{
      welcome: 'Welcome!',
      welcomeDescription: 'We are happy to have you here. We will guide you through the first steps to get started.',
      checksDescription: 'A check is a URL that will be checked periodically ⏰. If the URL is not reachable, an incident will be created 🔔.',
      checksCreationTitle: 'Let`s create your first check!',
      checksCreationDescription: 'To create a check, click on the "+ Add check" button.',
      checksNameTitle: 'Name',
      checksNameDescription: 'Give a name to your check. This name will be used to identify the check. For example: "My website".',
      checksTargetTitle: 'Target',
      checksTargetDescription: 'Enter the URL that will be checked. For example: "https://mywebsite.com". The URL must start with "http://" or "https://". You can also use an IP address.',
      checksPeriodTitle: 'Period',
      checksPeriodDescription: 'Select the period that the check will be performed. For example: "Every 5 minutes".',
      checksSaveTitle: 'Save',
      checksSaveDescription: 'Click on the "Save" button to save the check.',
      newUserOnboardingTitleFinish: 'Finish 🎉',
      newUserOnboardingDescriptionFinish: 'You have completed the onboarding. Now you know how to create a check. If you have any questions, you can contact us in the "Contact" section, we will be happy to help you 😊.',
    },
    information: {
      noIntegrationFound: 'No integration found',
      areYouSureYouWantToDelete: 'Are you sure you want to delete [ITEM]?',
      uniqueCodeGetFromTelegram: 'Unique code get from Telegram',
      telegramSetupInformation: 'You can receive direct messages on Telegram with the integration of the ta-vivo bot.',
      telegramSetupBot: 'Search Telegram',
      telegramSetupBotCommand: 'Type /start command. The bot will respond with a unique code.',
      telegramIntegrationNamePlaceholder: 'The name is to identify it in the list of integrations',
      emailVerification: 'A unique 1-use code was sent to [EMAIL]. Please check your spam folder if you don`t see the email in your main inbox.',
      verifyYourEmail: 'Verify your email',
      pleaseConfirmYourEmail: 'Please confirm your email',
      emailVerificationInformation: 'We already send a code to your email. Please check your spam folder if you don`t see the email in your main inbox.',
      emailSuccessfullyVerified: 'Email successfully verified',
      emailSent: 'Email sent',
      timeForRequestNewCode: 'Time for request new code',
      slackIntegrationDescription: 'Get notification directly to your Slack channel and get notified when a new incident is found.',
      slackIntegrationInstructions: 'To get notified, you need to add the bot to your Slack channel. Click in "Add to Slack" button and select your channel.',
      slackIntegrationAddedSuccess: 'Slack integration successfully added',
      discordIntegrationAddedSuccess: 'Discord integration successfully added',
      discordIntegrationDescription: 'Get notification directly to your Discord channel and get notified when a new incident is found.',
      discordIntegrationInstructions: 'To get notified, you need to add the "Webhook" to your Discord channel. Click in "Add to Discord" button and select your channel.',
      thanksForYourSubscription: 'Thanks for your subscription!',
      subscriptionSuccessDescription: 'All the features of your subscription are activated immediately.',
      unsubscribeDescription: 'If you unsubscribe your plan will change to "Basic" and will have the following features',
      subscriptionCancelDescription: 'Your subscription is cancel. You can resume it at any time.',
      reachedLimit: 'You have reached the limit, consider increasing your chances with a plan',
      passwordChanged: 'Password changed',
      recoveryPasswordDescription: 'A unique 1-use code was sent to [EMAIL]. Please check your spam folder if you don`t see the email in your main inbox.',
      recoveryPasswordInitialDescription: 'Please enter your email and we will send you a one-time code so you can recover your password',
      changePasswordRules: 'Your password must be at least 8 characters long and contain at least one number and one letter.',
      recoveryPasswordSuccess: 'Recovery password successfully',
      testIntegrationDescription: 'A test message will be sent to',
      retryOnFailDescription: 'If the Check fails, you can retry it until is up again.',
      timezoneDescription: 'This timezone will be used as the default setting for displaying dates in notifications, history, and everywhere a date exists.',
      whatsappNumberInformation: 'Fill the input with your WhatsApp number. It must be a valid number.',
      whatsappVerificationInformation: 'We already send a code to your WhatsApp.',
      diableCheckDescription: 'When you disable a Check you will stop receiving notifications and no more pings will be made until it is activated again.',
      enableCheckDescription: 'If you enable the check, pings will begin, if the check is down, you will begin to receive notifications.',
      authenticationDescription: 'Use a authentication header to authenticate your requests to your service.',
      writeACustomValueAndPressEnter: 'Write a custom value and press enter',
      authorizationHeaderConfigured: 'Authorization header configured',
      noIntegration1: 'You haven`t added any integration yet,',
      noIntegration2: 'to open a new tab and create your first integration to receive notifications.'
    },
    errors: {
      requireField: 'This field is required',
      notValidEmail: 'This is not a valid email',
      passwordSecurity: 'Password must be at least 8 characters long and contain at least one number and one letter',
      pleaseTypeTheOldPassword: 'Please type the old password',
      errorOnSave: 'Error on save, please try again',
      notValidPhoneNumber: 'This is not a valid phone number',
    },
    questions: {
      areYousureYouWantCancelSubscription: 'Are you sure you want to cancel your subscription?',
    },
    about: {
      aboutTheProject: 'Online service that was born from an idea I had with a client, I wanted to know when the servers I had with odoo instances went down due to the load of the database, and in addition to this, receive notifications via telegram. From there I got more creative and added ideas to the draft.',
      theProjectIsOpenSource: 'The project is open source and you can find it on',
      GuaranteeOfOperationAndDataIntegrity: 'Guarantee of operation and data integrity',
      guaranteeOfOperationAndDataIntegrityDescription: 'Thanks to Quasar (Vue) the Frontend is hosted in Netlify, the Backend that is made in NodeJS is in Digital ocean.',
      databaseAndBackups: 'The database is on Digital Ocean servers and Backups are made every day and sent to Supabase buckets.',
    }
  }
}
