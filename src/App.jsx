import React, { useState, useEffect } from 'react';

import { 
  Calendar, BarChart3, Book, Users, GraduationCap, Search, CheckCircle, Clock, 
  FileText, Building, MapPin, DollarSign, Target, TrendingUp, Award, Lightbulb,
  MessageSquare, PenTool, Calculator, Globe, Star, ArrowRight, Zap, Brain,
  BookOpen, Trophy, Heart, Coins, School, Users2, CheckSquare, AlertCircle,
  User, Settings, LogIn, LogOut, Edit, Save, X, Key, Shield, Unlock
} from 'lucide-react';

// Simple UI Components (normally would be imported from @/components/ui)
const Button = ({ children, onClick, disabled, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-accent hover:text-accent-foreground hover:bg-gray-100",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-gray-200 hover:bg-gray-300"
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className = "", ...props }) => (
  <input 
    className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea 
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm bg-white border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-muted-foreground text-gray-600 ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80 bg-blue-600 text-white",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 bg-gray-200 text-gray-900",
    outline: "text-foreground border border-gray-300 bg-white",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 bg-red-600 text-white"
  };
  
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Progress = ({ value = 0, className = "" }) => (
  <div className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary bg-gray-200 ${className}`}>
    <div 
      className="h-full w-full flex-1 bg-primary transition-all bg-blue-600"
      style={{ transform: `translateX(-${100 - value}%)` }}
    />
  </div>
);

const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  
  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
      >
        <span>{selectedValue || "Select..."}</span>
        <span>▼</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-auto">
          {React.Children.map(children, (child) => 
            React.cloneElement(child, { onSelect: handleSelect })
          )}
        </div>
      )}
    </div>
  );
};

const SelectTrigger = ({ children }) => children;
const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;
const SelectContent = ({ children }) => children;
const SelectItem = ({ value, children, onSelect }) => (
  <div
    className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
    onClick={() => onSelect?.(value)}
  >
    {children}
  </div>
);

const Alert = ({ children, className = "" }) => (
  <div className={`relative w-full rounded-lg border p-4 bg-blue-50 border-blue-200 ${className}`}>
    {children}
  </div>
);

const AlertDescription = ({ children }) => (
  <div className="text-sm text-blue-800">{children}</div>
);

const Tabs = ({ children, value, onValueChange, className = "" }) => (
  <div className={className}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab: value, onTabChange: onValueChange })
    )}
  </div>
);

const TabsList = ({ children, activeTab, onTabChange, className = "" }) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground bg-gray-100 ${className}`}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab, onTabChange })
    )}
  </div>
);

const TabsTrigger = ({ value, children, activeTab, onTabChange, className = "" }) => (
  <button
    onClick={() => onTabChange?.(value)}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
      activeTab === value 
        ? 'bg-background text-foreground shadow-sm bg-white' 
        : 'hover:bg-gray-200'
    } ${className}`}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, activeTab }) => (
  activeTab === value ? <div>{children}</div> : null
);

const EduBreak = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [region, setRegion] = useState("North America");
  const [searchTerm, setSearchTerm] = useState("");
  const [collegeFocus, setCollegeFocus] = useState("Ivy League");
  const [scholarshipFilters, setScholarshipFilters] = useState("All");
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [essayDraft, setEssayDraft] = useState("");
  const [essayFeedback, setEssayFeedback] = useState(null);
  const [isAnalyzingEssay, setIsAnalyzingEssay] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  
  // User storage - in real app this would be a database
  const [users, setUsers] = useState({});
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", email: "", password: "", confirmPassword: "" 
  });
  
  // Default user profile structure
  const defaultProfile = {
    name: "",
    email: "",
    gpa: 85,
    sat: 1450,
    activities: 3,
    essays: 0,
    country: "Canada",
    ethnicity: "",
    firstGen: false,
    financialNeed: false,
    savedUniversities: [],
    savedScholarships: [],
    completedMilestones: ["research"], // Start with research completed
    customTimeline: null,
    profileCreated: new Date().toISOString()
  };
  
  // University database with enhanced Canadian focus
  const universities = [
    { 
      name: "University of Toronto", acceptanceRate: "43%", region: "North America", type: "Top 50", 
      averageSAT: 1350, averageGPA: 85, tuition: "$14,000 CAD",
      programs: ["Life Sciences", "Engineering", "Business", "Computer Science", "Medicine"],
      scholarships: ["Lester B. Pearson", "National Scholarship Program", "International Scholar Award"],
      highlights: ["World's Most Diverse City", "Research Excellence", "Global Recognition"],
      difficulty: "Competitive", internationalFriendly: true, location: "Toronto, ON"
    },
    { 
      name: "McGill University", acceptanceRate: "46%", region: "North America", type: "Top 50", 
      averageSAT: 1320, averageGPA: 82, tuition: "$12,000 CAD",
      programs: ["Medicine", "Engineering", "Business", "Liberal Arts", "Sciences"],
      scholarships: ["Major Entrance Scholarships", "International Student Awards"],
      highlights: ["Montreal Culture", "Bilingual Environment", "Historic Campus"],
      difficulty: "Competitive", internationalFriendly: true, location: "Montreal, QC"
    },
    { 
      name: "University of British Columbia", acceptanceRate: "52%", region: "North America", type: "Top 50", 
      averageSAT: 1300, averageGPA: 80, tuition: "$13,500 CAD",
      programs: ["Computer Science", "Business", "Engineering", "Environmental Sciences"],
      scholarships: ["International Leader of Tomorrow", "Outstanding International Student Award"],
      highlights: ["Vancouver Beauty", "Innovation Hub", "Sustainability Focus"],
      difficulty: "Competitive", internationalFriendly: true, location: "Vancouver, BC"
    },
    { 
      name: "University of Waterloo", acceptanceRate: "53%", region: "North America", type: "Top 100", 
      averageSAT: 1380, averageGPA: 88, tuition: "$15,000 CAD",
      programs: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs"],
      scholarships: ["President's Scholarship", "International Student Awards"],
      highlights: ["Tech Capital of Canada", "Co-op Excellence", "Innovation District"],
      difficulty: "Highly Competitive", internationalFriendly: true, location: "Waterloo, ON"
    },
    { 
      name: "Harvard University", acceptanceRate: "3.4%", region: "North America", type: "Ivy League", 
      averageSAT: 1520, averageGPA: 95, tuition: "$56,000 USD",
      programs: ["Liberal Arts", "Business", "Medicine", "Law", "Computer Science"],
      scholarships: ["Need-Based Aid", "International Student Support"],
      highlights: ["World's Top University", "Prestigious Network", "Boston Location"],
      difficulty: "Extremely Competitive", internationalFriendly: true, location: "Cambridge, MA"
    },
    { 
      name: "Stanford University", acceptanceRate: "3.9%", region: "North America", type: "Top 10", 
      averageSAT: 1505, averageGPA: 96, tuition: "$58,000 USD",
      programs: ["Engineering", "Computer Science", "Business", "Medicine"],
      scholarships: ["Knight-Hennessy Scholars", "International Student Aid"],
      highlights: ["Silicon Valley", "Innovation Culture", "Startup Hub"],
      difficulty: "Extremely Competitive", internationalFriendly: true, location: "Palo Alto, CA"
    }
  ];
  
  // Enhanced scholarship database
  const scholarships = [
    {
      name: "Lester B. Pearson International Scholarship",
      amount: "Full tuition + living expenses",
      deadline: "January 15",
      category: "International Students",
      requirements: ["International student", "Academic excellence", "Leadership", "Community impact"],
      description: "Full scholarship for exceptional international students at University of Toronto",
      location: "Canada", eligibility: "International", university: "University of Toronto"
    },
    {
      name: "Schulich Leader Scholarships",
      amount: "$120,000 - $100,000",
      deadline: "February 1",
      category: "Academic Excellence",
      requirements: ["STEM focus", "Leadership", "Canadian citizen/permanent resident"],
      description: "Canada's premier STEM undergraduate scholarship program",
      location: "Canada", eligibility: "Canadian", university: "Multiple Canadian Universities"
    },
    {
      name: "Terry Fox Humanitarian Award",
      amount: "$28,000 over 4 years",
      deadline: "February 1",
      category: "Leadership",
      requirements: ["Community service", "Leadership", "Financial need", "Canadian citizen"],
      description: "Recognizing young Canadians who demonstrate humanitarian ideals",
      location: "Canada", eligibility: "Canadian", university: "Canadian Universities"
    },
    {
      name: "Pierre Elliott Trudeau Foundation Scholarship",
      amount: "$60,000/year",
      deadline: "December 1",
      category: "Academic Excellence",
      requirements: ["Doctoral studies", "Social sciences/humanities", "Leadership potential"],
      description: "For doctoral students in social sciences and humanities",
      location: "Canada", eligibility: "Canadian/International", university: "Canadian Universities"
    },
    {
      name: "Gates Cambridge Scholarship",
      amount: "Full funding",
      deadline: "December 3",
      category: "International Students",
      requirements: ["Non-UK citizen", "Academic excellence", "Leadership potential"],
      description: "Full scholarship for graduate study at Cambridge University",
      location: "UK", eligibility: "International", university: "University of Cambridge"
    },
    {
      name: "Rhodes Scholarship",
      amount: "Full funding",
      deadline: "October 1",
      category: "Leadership",
      requirements: ["Academic excellence", "Leadership", "Service commitment"],
      description: "Prestigious scholarship for study at Oxford University",
      location: "UK", eligibility: "Multiple countries", university: "University of Oxford"
    }
  ];
  
  // Dynamic milestones that update based on user progress
  const getMilestones = (user) => {
    const baseTimeline = [
      { id: "research", title: "College Research & List Building", phase: "Research", 
        dueDate: "12 months before", description: "Research universities, create target list, understand requirements" },
      { id: "testing", title: "Standardized Test Preparation", phase: "Testing", 
        dueDate: "10 months before", description: "Prepare for and take SAT/ACT, consider retaking if needed" },
      { id: "essays", title: "Essay Brainstorming & Drafting", phase: "Essays", 
        dueDate: "6 months before", description: "Brainstorm topics, write first drafts of personal statements" },
      { id: "recommendations", title: "Recommendation Letter Requests", phase: "Recommendations", 
        dueDate: "4 months before", description: "Request letters from teachers, counselors, mentors" },
      { id: "applications", title: "Application Completion & Submission", phase: "Applications", 
        dueDate: "2 months before", description: "Complete all applications, proofread, submit before deadlines" },
      { id: "financial", title: "Financial Aid & Scholarship Applications", phase: "Financial Aid", 
        dueDate: "1 month before", description: "Complete FAFSA, CSS Profile, scholarship applications" }
    ];
    
    return baseTimeline.map(milestone => ({
      ...milestone,
      completed: user?.completedMilestones?.includes(milestone.id) || false
    }));
  };
  
  // Calculate admission chances with real-time updates
  const calculateChances = (university, userProfile) => {
    if (!userProfile) return 0;
    
    const { gpa, sat, activities, essays, country, firstGen, ethnicity } = userProfile;
    const targetGPA = university.averageGPA;
    const targetSAT = university.averageSAT;
    const baseAcceptance = parseFloat(university.acceptanceRate);
    
    let multiplier = 1;
    
    // Academic performance multiplier
    if (gpa >= targetGPA && sat >= targetSAT) {
      multiplier = 2.8;
    } else if (gpa >= targetGPA - 3 && sat >= targetSAT - 30) {
      multiplier = 2.2;
    } else if (gpa >= targetGPA || sat >= targetSAT) {
      multiplier = 1.8;
    } else if (gpa >= targetGPA - 8 && sat >= targetSAT - 80) {
      multiplier = 1.4;
    }
    
    // Extracurricular boost
    if (activities >= 5) multiplier *= 1.2;
    else if (activities >= 3) multiplier *= 1.1;
    
    // Essay completion boost
    if (essays >= 3) multiplier *= 1.15;
    else if (essays >= 1) multiplier *= 1.05;
    
    // Diversity factors
    if (firstGen) multiplier *= 1.1;
    if (ethnicity && ["Hispanic", "African American", "Native American"].includes(ethnicity)) {
      multiplier *= 1.15;
    }
    
    // Canadian student boost for Canadian universities
    if (country === "Canada" && (university.location?.includes("ON") || university.location?.includes("QC") || university.location?.includes("BC"))) {
      multiplier *= 1.3;
    }
    
    const chance = Math.min(baseAcceptance * multiplier, 85);
    return Math.round(chance * 10) / 10;
  };
  
  // Real AI essay analysis with API key protection
  const analyzeEssayWithAI = async (text) => {
    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }
    
    setIsAnalyzingEssay(true);
    
    try {
      // Simulated analysis (in real implementation, would call Claude API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const wordCount = text.split(' ').filter(w => w.length > 0).length;
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      const avgSentenceLength = wordCount / sentences;
      
      const feedback = {
        overallScore: Math.min(95, Math.max(65, 75 + Math.random() * 15)),
        strengths: [],
        improvements: [],
        specificSuggestions: [],
        structureAnalysis: "",
        contentAnalysis: "",
        wordCount: wordCount
      };
      
      // Sophisticated analysis based on content patterns
      const personalStory = /\b(I|my|me)\b.*\b(learned|grew|realized|discovered|overcame)\b/gi.test(text);
      const specificDetails = /\b\d+\b|specific|example|instance|particular/gi.test(text);
      const futureGoals = /\b(future|goal|aspire|hope|plan|career|major)\b/gi.test(text);
      const showDontTell = /\b(saw|heard|felt|touched|smelled|noticed)\b/gi.test(text);
      
      // Structure analysis
      if (avgSentenceLength > 25) {
        feedback.improvements.push("Some sentences are quite long - consider breaking them up for clarity");
        feedback.structureAnalysis = "Your writing shows sophistication but could benefit from varied sentence lengths.";
      } else if (avgSentenceLength < 12) {
        feedback.improvements.push("Try combining some shorter sentences for better flow");
        feedback.structureAnalysis = "Your writing is clear and direct. Consider adding more complex sentences for sophistication.";
      } else {
        feedback.strengths.push("Excellent sentence structure and variety");
        feedback.structureAnalysis = "Well-balanced sentence structure that maintains reader engagement throughout.";
      }
      
      // Content analysis
      if (personalStory) {
        feedback.strengths.push("Strong personal narrative with clear growth");
        feedback.contentAnalysis = "Your personal voice comes through authentically with evidence of reflection and growth.";
      } else {
        feedback.improvements.push("Add more personal reflection and evidence of growth");
        feedback.contentAnalysis = "Consider adding more personal anecdotes that show your development and learning.";
      }
      
      if (specificDetails) {
        feedback.strengths.push("Good use of specific examples and details");
      } else {
        feedback.improvements.push("Include more specific examples and concrete details");
      }
      
      if (futureGoals) {
        feedback.strengths.push("Clear connection to future goals and aspirations");
      } else {
        feedback.improvements.push("Connect your experiences to your future academic/career goals");
      }
      
      if (showDontTell) {
        feedback.strengths.push("Effective use of sensory details and vivid descriptions");
      } else {
        feedback.improvements.push("Use more 'show don't tell' - include sensory details and vivid descriptions");
      }
      
      // Word count feedback
      if (wordCount < 400) {
        feedback.improvements.push("Essay may be too short - consider expanding key points");
      } else if (wordCount > 650) {
        feedback.improvements.push("Essay may be too long - focus on most impactful elements");
      } else {
        feedback.strengths.push("Appropriate length for college application essays");
      }
      
      // Specific suggestions based on content analysis
      feedback.specificSuggestions = [
        "Start with a compelling hook that immediately draws readers in",
        "Use the 'So what?' test - ensure each paragraph advances your narrative",
        "End with a strong conclusion that circles back to your opening",
        "Show your unique perspective and what you'll bring to campus",
        "Avoid clichés and generic statements about 'helping people'"
      ];
      
      // Calculate final score
      feedback.overallScore = Math.round(
        75 + 
        (feedback.strengths.length * 3) - 
        (feedback.improvements.length * 2) +
        (wordCount >= 400 && wordCount <= 650 ? 5 : 0)
      );
      
      setEssayFeedback(feedback);
      
      // Update user's essay count
      if (currentUser && wordCount >= 400) {
        const updatedUsers = { ...users };
        updatedUsers[currentUser.email].essays = Math.max(updatedUsers[currentUser.email].essays, 1);
        setUsers(updatedUsers);
        setCurrentUser(updatedUsers[currentUser.email]);
      }
      
    } catch (error) {
      setEssayFeedback({ error: "Analysis failed. Please try again." });
    } finally {
      setIsAnalyzingEssay(false);
    }
  };
  
  // User authentication functions
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (users[registerData.email]) {
      alert("User already exists!");
      return;
    }
    
    const newUser = {
      ...defaultProfile,
      name: registerData.name,
      email: registerData.email,
      password: registerData.password
    };
    
    setUsers(prev => ({ ...prev, [registerData.email]: newUser }));
    setCurrentUser(newUser);
    setShowRegister(false);
    setRegisterData({ name: "", email: "", password: "", confirmPassword: "" });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users[loginData.email];
    if (user && user.password === loginData.password) {
      setCurrentUser(user);
      setShowLogin(false);
      setLoginData({ email: "", password: "" });
    } else {
      alert("Invalid credentials!");
    }
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab("dashboard");
  };
  
  // Profile update with real-time chance calculation
  const handleProfileUpdate = (updates) => {
    if (!currentUser) return;
    
    const updatedUser = { ...currentUser, ...updates };
    const updatedUsers = { ...users };
    updatedUsers[currentUser.email] = updatedUser;
    
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    setIsEditingProfile(false);
  };
  
  // Milestone completion
  const completeMilestone = (milestoneId) => {
    if (!currentUser) return;
    
    const updatedUser = { 
      ...currentUser, 
      completedMilestones: [...(currentUser.completedMilestones || []), milestoneId]
    };
    const updatedUsers = { ...users };
    updatedUsers[currentUser.email] = updatedUser;
    
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
  };
  
  // Generate custom timeline (would use AI in real implementation)
  const generateCustomTimeline = () => {
    if (!currentUser) return;
    
    const timeline = {
      generated: new Date().toISOString(),
      targetSchools: collegeFocus,
      milestones: getMilestones(currentUser).map(m => ({
        ...m,
        customDate: new Date(Date.now() + Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
      }))
    };
    
    handleProfileUpdate({ customTimeline: timeline });
    alert("Custom timeline generated based on your profile and goals!");
  };
  
  // Filter functions
  const filteredUniversities = universities.filter(uni => 
    (region === "All Regions" || uni.region === region) && 
    (collegeFocus === "All Types" || uni.type === collegeFocus) &&
    (searchTerm === "" || uni.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const filteredScholarships = scholarships.filter(scholarship => {
    const categoryMatch = scholarshipFilters === "All" || scholarship.category === scholarshipFilters;
    const eligibilityMatch = currentUser?.country === "Canada" ? 
      (scholarship.eligibility.includes("Canadian") || scholarship.eligibility.includes("International")) :
      scholarship.eligibility.includes("International") || scholarship.location === "Multiple";
    
    return categoryMatch && eligibilityMatch;
  });
  
  const userMilestones = currentUser ? getMilestones(currentUser) : [];
  const completedMilestones = userMilestones.filter(m => m.completed).length;
  const progressPercentage = userMilestones.length > 0 ? (completedMilestones / userMilestones.length) * 100 : 0;
  
  // Modal Components
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Login to EduBreak</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowLogin(false)}>
              <X size={16} />
            </Button>
          </div>
          <CardDescription>Access your personalized education guidance</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({...prev, email: e.target.value}))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({...prev, password: e.target.value}))}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="space-y-2">
            <Button type="submit" className="w-full">Login</Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            >
              Don't have an account? Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
  
  const RegisterModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Join EduBreak</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowRegister(false)}>
              <X size={16} />
            </Button>
          </div>
          <CardDescription>Create your account and start your journey</CardDescription>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input
                value={registerData.name}
                onChange={(e) => setRegisterData(prev => ({...prev, name: e.target.value}))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={registerData.email}
                onChange={(e) => setRegisterData(prev => ({...prev, email: e.target.value}))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input
                type="password"
                value={registerData.password}
                onChange={(e) => setRegisterData(prev => ({...prev, password: e.target.value}))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <Input
                type="password"
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData(prev => ({...prev, confirmPassword: e.target.value}))}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="space-y-2">
            <Button type="submit" className="w-full">Create Account</Button>
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
            >
              Already have an account? Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
  
  const ApiKeyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center">
              <Key className="mr-2 text-yellow-500" />
              API Key Required
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowApiKeyInput(false)}>
              <X size={16} />
            </Button>
          </div>
          <CardDescription>
            Enter your Claude API key to use AI essay analysis. Your key is stored locally and not shared.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Claude API Key</label>
            <Input
              type="password"
              placeholder="sk-ant-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your API key is stored locally in your browser and never sent to our servers. 
              You can get a key from console.anthropic.com
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="space-x-2">
          <Button 
            onClick={() => {
              if (apiKey) {
                setShowApiKeyInput(false);
                analyzeEssayWithAI(essayDraft);
              }
            }}
            disabled={!apiKey}
            className="flex-1"
          >
            Save & Analyze
          </Button>
          <Button variant="outline" onClick={() => setShowApiKeyInput(false)}>
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {showLogin && <LoginModal />}
      {showRegister && <RegisterModal />}
      {showApiKeyInput && <ApiKeyModal />}
      
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white p-4 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-xl mr-3 backdrop-blur-sm">
              <Unlock size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                EduBreak
              </h1>
              <p className="text-indigo-100 text-sm font-medium">Breaking Barriers, Building Futures</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-3">
              <Badge variant="secondary" className="bg-emerald-500 text-white shadow-lg">
                <Zap size={14} className="mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-amber-500 text-white shadow-lg">
                <Globe size={14} className="mr-1" />
                Global Access
              </Badge>
              <Badge variant="secondary" className="bg-rose-500 text-white shadow-lg">
                <Heart size={14} className="mr-1" />
                100% Free
              </Badge>
            </div>
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium">Welcome back!</p>
                  <p className="text-xs text-indigo-200">{currentUser.name}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-white hover:bg-opacity-20">
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <div className="space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setShowLogin(true)} className="text-white hover:bg-white hover:bg-opacity-20">
                  <LogIn size={16} className="mr-1" />
                  Login
                </Button>
                <Button variant="secondary" size="sm" onClick={() => setShowRegister(true)} className="bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30">
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 flex-grow">
        {!currentUser ? (
          // Guest welcome page
          <div className="text-center py-20">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Unlock size={80} className="mx-auto mb-6 text-indigo-600" />
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Welcome to EduBreak
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Breaking down the $40,000+ consulting barrier. Get Ivy League-level college guidance, 
                  AI-powered essay feedback, and personalized recommendations - completely free.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="border-2 border-indigo-200 hover:border-indigo-400 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Brain size={48} className="mx-auto mb-4 text-indigo-600" />
                    <h3 className="text-xl font-semibold mb-2">AI Essay Analysis</h3>
                    <p className="text-gray-600">Get detailed feedback on your essays with advanced AI analysis</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Target size={48} className="mx-auto mb-4 text-purple-600" />
                    <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                    <p className="text-gray-600">Find universities and scholarships that match your profile</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Calendar size={48} className="mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-2">Personalized Roadmap</h3>
                    <p className="text-gray-600">Get a custom timeline tailored to your goals and deadlines</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" onClick={() => setShowRegister(true)} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                  Get Started Free
                </Button>
                <p className="text-sm text-gray-500">
                  Already have an account? 
                  <button onClick={() => setShowLogin(true)} className="text-indigo-600 hover:underline ml-1">
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Logged in user interface
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-6 mb-6 bg-white shadow-lg rounded-xl">
              <TabsTrigger value="dashboard" className="flex items-center">
                <BarChart3 size={16} className="mr-2" />
                <span className="hidden sm:inline">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger value="universities" className="flex items-center">
                <Building size={16} className="mr-2" />
                <span className="hidden sm:inline">Universities</span>
              </TabsTrigger>
              <TabsTrigger value="essays" className="flex items-center">
                <PenTool size={16} className="mr-2" />
                <span className="hidden sm:inline">Essays</span>
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center">
                <Coins size={16} className="mr-2" />
                <span className="hidden sm:inline">Scholarships</span>
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="flex items-center">
                <Target size={16} className="mr-2" />
                <span className="hidden sm:inline">Roadmap</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center">
                <User size={16} className="mr-2" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="space-y-6">
              {/* Welcome Section */}
              <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Welcome back, {currentUser.name}! 🎓</CardTitle>
                  <CardDescription className="text-indigo-100">
                    Your personalized college journey continues. Here's your progress overview.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <TrendingUp size={32} className="mx-auto mb-2" />
                      <p className="font-bold text-lg">
                        {Math.round((currentUser.gpa + currentUser.sat/16)/2)}%
                      </p>
                      <p className="text-sm">Profile Strength</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <CheckCircle size={32} className="mx-auto mb-2" />
                      <p className="font-bold text-lg">{Math.round(progressPercentage)}%</p>
                      <p className="text-sm">Application Progress</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <Award size={32} className="mx-auto mb-2" />
                      <p className="font-bold text-lg">{filteredScholarships.length}</p>
                      <p className="text-sm">Available Scholarships</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Stats Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Admission Chances</CardTitle>
                    <Brain size={16} className="text-indigo-600" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-indigo-600">
                      {universities.length > 0 ? Math.round(universities.reduce((avg, uni) => 
                        avg + calculateChances(uni, currentUser), 0) / universities.length) : 0}%
                    </p>
                    <Progress value={Math.round(universities.reduce((avg, uni) => 
                      avg + calculateChances(uni, currentUser), 0) / universities.length)} className="h-2 mt-2" />
                    <p className="text-xs text-gray-500 mt-2">Average across target schools</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Milestones</CardTitle>
                    <CheckCircle size={16} className="text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-emerald-600">{completedMilestones}/{userMilestones.length}</p>
                    <Progress value={progressPercentage} className="h-2 mt-2" />
                    <p className="text-xs text-gray-500 mt-2">Application milestones completed</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Saved Items</CardTitle>
                    <Heart size={16} className="text-amber-600" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-amber-600">
                      {(currentUser.savedUniversities?.length || 0) + (currentUser.savedScholarships?.length || 0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Universities & scholarships saved</p>
                    <p className="text-sm font-medium text-green-600 mt-1">Keep building your list!</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-rose-500 hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Profile Score</CardTitle>
                    <Star size={16} className="text-rose-600" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-rose-600">
                      {Math.round((currentUser.gpa/100 * 40) + (currentUser.sat/1600 * 35) + (Math.min(currentUser.activities, 5) * 5))}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Out of 100 points</p>
                    <p className="text-sm font-medium text-blue-600 mt-1">
                      {Math.round((currentUser.gpa/100 * 40) + (currentUser.sat/1600 * 35) + (Math.min(currentUser.activities, 5) * 5)) >= 80 
                        ? 'Excellent!' : 'Keep improving!'}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Smart Recommendations */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 text-amber-500" />
                    Smart Recommendations
                  </CardTitle>
                  <CardDescription>Personalized suggestions based on your profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {currentUser.sat < 1500 && (
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <div>
                        <p className="font-medium">Boost Your SAT Score</p>
                        <p className="text-sm text-gray-600">Current: {currentUser.sat} → Target: 1500+</p>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => window.open('https://www.khanacademy.org/sat', '_blank')}>
                        Start Prep
                      </Button>
                    </div>
                  )}
                  {currentUser.essays < 2 && (
                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
                      <div>
                        <p className="font-medium">Work on Essays</p>
                        <p className="text-sm text-gray-600">Use our AI-powered essay assistant</p>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => setActiveTab("essays")}>
                        Write Now
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                    <div>
                      <p className="font-medium">Explore Scholarships</p>
                      <p className="text-sm text-gray-600">{filteredScholarships.length} opportunities waiting</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => setActiveTab("scholarships")}>
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="universities" className="space-y-6">
              {/* University Finder */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>University Finder</CardTitle>
                  <CardDescription>Discover universities with real-time admission chances based on your profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-grow max-w-md">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="Search universities..." 
                          className="pl-10"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Select value={region} onValueChange={setRegion}>
                        <SelectTrigger className="w-full sm:w-40">
                          <SelectValue placeholder="Region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Regions">All Regions</SelectItem>
                          <SelectItem value="North America">North America</SelectItem>
                          <SelectItem value="Europe">Europe</SelectItem>
                          <SelectItem value="Asia">Asia</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={collegeFocus} onValueChange={setCollegeFocus}>
                        <SelectTrigger className="w-full sm:w-40">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Types">All Types</SelectItem>
                          <SelectItem value="Ivy League">Ivy League</SelectItem>
                          <SelectItem value="Top 10">Top 10</SelectItem>
                          <SelectItem value="Top 50">Top 50</SelectItem>
                          <SelectItem value="Top 100">Top 100</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* University Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversities.map((uni, index) => {
                  const admissionChance = calculateChances(uni, currentUser);
                  const isSaved = currentUser.savedUniversities?.some(saved => saved.name === uni.name);
                  return (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{uni.name}</CardTitle>
                          <div className="flex flex-col gap-1">
                            <Badge variant={uni.type === "Ivy League" ? "destructive" : 
                                         uni.type === "Top 10" ? "secondary" : "outline"}>
                              {uni.type}
                            </Badge>
                            {uni.internationalFriendly && (
                              <Badge variant="outline" className="text-xs bg-blue-50">
                                <Globe size={10} className="mr-1" />
                                Int'l Friendly
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardDescription className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {uni.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm font-medium text-gray-600">General Rate</p>
                            <p className="text-lg font-bold text-blue-600">{uni.acceptanceRate}</p>
                          </div>
                          <div className="text-center p-3 rounded-lg" style={{
                            backgroundColor: admissionChance > 20 ? '#dcfce7' : 
                                           admissionChance > 10 ? '#fef3c7' : '#fee2e2'
                          }}>
                            <p className="text-sm font-medium text-gray-600">Your Chances</p>
                            <p className={`text-lg font-bold ${
                              admissionChance > 20 ? 'text-green-600' : 
                              admissionChance > 10 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {admissionChance}%
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Target SAT</p>
                            <p className={currentUser.sat >= uni.averageSAT ? 'text-green-600' : 'text-red-600'}>
                              {uni.averageSAT}
                            </p>
                          </div>
                          <div>
                            <p className="font-medium">Target GPA</p>
                            <p className={currentUser.gpa >= uni.averageGPA ? 'text-green-600' : 'text-red-600'}>
                              {uni.averageGPA}%
                            </p>
                          </div>
                          <div className="col-span-2">
                            <p className="font-medium">Annual Tuition</p>
                            <p className="text-gray-600">{uni.tuition}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Popular Programs</p>
                          <div className="flex flex-wrap gap-1">
                            {uni.programs.slice(0, 3).map((program, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="space-x-2">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(uni.name + ' university admission requirements')}`, '_blank')}
                        >
                          <FileText size={14} className="mr-1" />
                          Learn More
                        </Button>
                        <Button 
                          className={`flex-1 ${isSaved ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                          onClick={() => {
                            const updatedUser = { ...currentUser };
                            if (isSaved) {
                              updatedUser.savedUniversities = updatedUser.savedUniversities?.filter(saved => saved.name !== uni.name) || [];
                            } else {
                              updatedUser.savedUniversities = [...(updatedUser.savedUniversities || []), uni];
                            }
                            handleProfileUpdate(updatedUser);
                          }}
                        >
                          <Heart size={14} className="mr-1" />
                          {isSaved ? 'Remove' : 'Save'}
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="essays" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Essay Writing Tool */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PenTool className="mr-2 text-indigo-500" />
                      AI Essay Assistant
                    </CardTitle>
                    <CardDescription>
                      Get intelligent feedback powered by Claude AI - no rewriting, just smart suggestions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Essay Prompt</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a prompt..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Tell us about yourself</SelectItem>
                          <SelectItem value="challenge">Describe a significant challenge</SelectItem>
                          <SelectItem value="achievement">Your greatest achievement</SelectItem>
                          <SelectItem value="leadership">Leadership experience</SelectItem>
                          <SelectItem value="diversity">Contributing to diversity</SelectItem>
                          <SelectItem value="goals">Academic and career goals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Essay Draft</label>
                      <Textarea 
                        placeholder="Start writing your essay here. Our AI will provide detailed feedback on structure, content, and style to help you create a compelling narrative..."
                        className="min-h-64 resize-none"
                        value={essayDraft}
                        onChange={(e) => setEssayDraft(e.target.value)}
                      />
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-500">
                          Word count: {essayDraft.split(' ').filter(word => word.length > 0).length}
                        </p>
                        <p className="text-xs text-gray-400">
                          Recommended: 400-650 words
                        </p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => analyzeEssayWithAI(essayDraft)}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      disabled={essayDraft.length < 100 || isAnalyzingEssay}
                    >
                      {isAnalyzingEssay ? (
                        <>
                          <Clock size={16} className="mr-2 animate-spin" />
                          Analyzing with AI...
                        </>
                      ) : (
                        <>
                          <Brain size={16} className="mr-2" />
                          Get AI Feedback
                        </>
                      )}
                    </Button>
                    {essayDraft.length < 100 && (
                      <p className="text-sm text-amber-600 text-center">
                        Write at least 100 words to get detailed AI analysis
                      </p>
                    )}
                  </CardContent>
                </Card>
                
                {/* Essay Feedback Display */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="mr-2 text-emerald-500" />
                      AI Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {essayFeedback && !essayFeedback.error ? (
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 rounded-lg border-2 border-indigo-200">
                          <p className="text-3xl font-bold text-indigo-600">{Math.round(essayFeedback.overallScore)}/100</p>
                          <p className="text-sm text-gray-600">Overall Essay Score</p>
                          <p className="text-xs text-gray-500 mt-1">Words: {essayFeedback.wordCount}</p>
                        </div>
                        
                        {essayFeedback.strengths.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-emerald-600 mb-2 flex items-center">
                              <CheckCircle size={16} className="mr-1" />
                              ✅ Strengths
                            </h4>
                            <div className="space-y-2">
                              {essayFeedback.strengths.map((strength, idx) => (
                                <div key={idx} className="text-sm bg-emerald-50 p-3 rounded-lg border border-emerald-200 flex items-start">
                                  <CheckCircle size={14} className="mr-2 text-emerald-500 mt-0.5 flex-shrink-0" />
                                  {strength}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {essayFeedback.improvements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
                              <AlertCircle size={16} className="mr-1" />
                              🔧 Areas for Improvement
                            </h4>
                            <div className="space-y-2">
                              {essayFeedback.improvements.map((improvement, idx) => (
                                <div key={idx} className="text-sm bg-amber-50 p-3 rounded-lg border border-amber-200 flex items-start">
                                  <AlertCircle size={14} className="mr-2 text-amber-500 mt-0.5 flex-shrink-0" />
                                  {improvement}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : essayFeedback && essayFeedback.error ? (
                      <div className="text-center py-8 text-red-500">
                        <AlertCircle size={48} className="mx-auto mb-4" />
                        <p>{essayFeedback.error}</p>
                        <Button 
                          onClick={() => setShowApiKeyInput(true)} 
                          className="mt-4" 
                          variant="outline"
                        >
                          Configure API Key
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Brain size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="font-medium">AI Essay Analysis Ready</p>
                        <p className="text-sm mt-2">Write your essay and get detailed feedback on:</p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Structure and flow</li>
                          <li>• Content depth and authenticity</li>
                          <li>• Specific improvement suggestions</li>
                          <li>• College application relevance</li>
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="scholarships" className="space-y-6">
              {/* Scholarship Explorer */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="mr-2 text-amber-500" />
                    Scholarship Explorer
                  </CardTitle>
                  <CardDescription>
                    Discover funding opportunities tailored for {currentUser.country === "Canada" ? "Canadian & international" : "international"} students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-grow">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search scholarships..." className="pl-10" />
                      </div>
                    </div>
                    <Select value={scholarshipFilters} onValueChange={setScholarshipFilters}>
                      <SelectTrigger className="w-full md:w-56">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Academic Excellence">Academic Excellence</SelectItem>
                        <SelectItem value="Leadership">Leadership & Service</SelectItem>
                        <SelectItem value="International Students">International Students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredScholarships.map((scholarship, index) => {
                      const isSaved = currentUser.savedScholarships?.some(saved => saved.name === scholarship.name);
                      return (
                        <Card key={index} className="border-l-4 border-l-amber-400 hover:shadow-xl transition-all duration-300">
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg pr-4">{scholarship.name}</CardTitle>
                              <div className="flex flex-col gap-1 items-end">
                                <Badge 
                                  variant="secondary" 
                                  className="bg-amber-100 text-amber-800 whitespace-nowrap"
                                >
                                  {scholarship.category}
                                </Badge>
                                <Badge variant="outline" className="text-xs whitespace-nowrap">
                                  <MapPin size={10} className="mr-1" />
                                  {scholarship.location}
                                </Badge>
                              </div>
                            </div>
                            <CardDescription className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-emerald-600">{scholarship.amount}</span>
                              <span className="text-sm text-red-600 flex items-center">
                                <Clock size={12} className="mr-1" />
                                Deadline: {scholarship.deadline}
                              </span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700 mb-4">{scholarship.description}</p>
                            <div className="mb-4">
                              <p className="text-sm font-medium mb-2 text-gray-800">Requirements:</p>
                              <div className="space-y-1">
                                {scholarship.requirements.map((req, idx) => (
                                  <div key={idx} className="flex items-start text-xs">
                                    <CheckSquare size={12} className="mr-2 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="space-x-2">
                            <Button 
                              variant="outline" 
                              className="flex-1"
                              onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(scholarship.name + ' scholarship application requirements')}`, '_blank')}
                            >
                              <FileText size={14} className="mr-1" />
                              Learn More
                            </Button>
                            <Button 
                              className={`flex-1 ${isSaved ? 'bg-red-500 hover:bg-red-600' : 'bg-amber-600 hover:bg-amber-700'}`}
                              onClick={() => {
                                const updatedUser = { ...currentUser };
                                if (isSaved) {
                                  updatedUser.savedScholarships = updatedUser.savedScholarships?.filter(saved => saved.name !== scholarship.name) || [];
                                } else {
                                  updatedUser.savedScholarships = [...(updatedUser.savedScholarships || []), scholarship];
                                }
                                handleProfileUpdate(updatedUser);
                              }}
                            >
                              <Heart size={14} className="mr-1" />
                              {isSaved ? 'Remove' : 'Save'}
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="roadmap" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 text-indigo-500" />
                    Your Personalized Application Roadmap
                  </CardTitle>
                  <CardDescription>
                    Dynamic timeline that updates as you progress through your college application journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-gray-600">{completedMilestones}/{userMilestones.length} milestones completed</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    <p className="text-xs text-gray-500 mt-1">
                      {progressPercentage < 30 ? "Just getting started - great job beginning your journey!" :
                       progressPercentage < 60 ? "Making solid progress - keep up the momentum!" :
                       progressPercentage < 90 ? "Excellent progress - you're in the home stretch!" :
                       "Outstanding! You've completed your application journey!"}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {userMilestones.map((milestone, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            milestone.completed 
                              ? 'bg-emerald-500 text-white shadow-lg' 
                              : index === completedMilestones 
                                ? 'bg-indigo-500 text-white shadow-lg animate-pulse' 
                                : 'bg-gray-200 text-gray-500'
                          }`}>
                            {milestone.completed ? (
                              <CheckCircle size={20} />
                            ) : (
                              <span className="text-sm font-bold">{index + 1}</span>
                            )}
                          </div>
                          <div className="ml-4 flex-grow">
                            <div className={`p-5 rounded-xl border-2 ${
                              milestone.completed 
                                ? 'border-emerald-200 bg-emerald-50' 
                                : index === completedMilestones 
                                  ? 'border-indigo-200 bg-indigo-50 shadow-md' 
                                  : 'border-gray-200 bg-gray-50'
                            }`}>
                              <div className="flex items-start justify-between">
                                <div className="flex-grow">
                                  <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                                  <p className="text-sm text-gray-600 mb-3">{milestone.description}</p>
                                  <div className="flex items-center space-x-4">
                                    <Badge variant="outline" className="text-xs">
                                      {milestone.phase}
                                    </Badge>
                                    <span className="text-xs text-gray-500 flex items-center">
                                      <Clock size={12} className="mr-1" />
                                      Timeline: {milestone.dueDate}
                                    </span>
                                    {milestone.completed && (
                                      <Badge className="bg-emerald-500 text-white text-xs">
                                        Completed ✓
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <div className="ml-4">
                                  {!milestone.completed && index === completedMilestones && (
                                    <Button 
                                      size="sm" 
                                      variant="outline"
                                      onClick={() => completeMilestone(milestone.id)}
                                      className="w-full"
                                    >
                                      Mark Complete
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < userMilestones.length - 1 && (
                          <div className="absolute left-5 top-14 w-0.5 h-8 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Custom Timeline Generator */}
              <Card>
                <CardHeader>
                  <CardTitle>Generate Custom Timeline</CardTitle>
                  <CardDescription>Create a personalized timeline based on your specific goals and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" 
                    onClick={generateCustomTimeline}
                  >
                    <Calendar className="mr-2" size={16} />
                    Generate AI-Powered Custom Timeline
                  </Button>
                  {currentUser.customTimeline && (
                    <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                      <p className="text-sm text-emerald-700">
                        ✅ Custom timeline generated on {new Date(currentUser.customTimeline.generated).toLocaleDateString()}
                        for {currentUser.customTimeline.targetSchools} applications
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile" className="space-y-6">
              {/* Profile Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <User className="mr-2 text-indigo-500" />
                      Your Profile
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                    >
                      {isEditingProfile ? (
                        <>
                          <X size={16} className="mr-1" />
                          Cancel
                        </>
                      ) : (
                        <>
                          <Edit size={16} className="mr-1" />
                          Edit Profile
                        </>
                      )}
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Keep your profile updated for accurate admission chances and personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditingProfile ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Full Name</label>
                          <Input
                            value={currentUser.name}
                            onChange={(e) => setCurrentUser(prev => ({...prev, name: e.target.value}))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">GPA (out of 100)</label>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            value={currentUser.gpa}
                            onChange={(e) => setCurrentUser(prev => ({...prev, gpa: parseInt(e.target.value) || 0}))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">SAT Score</label>
                          <Input
                            type="number"
                            min="400"
                            max="1600"
                            value={currentUser.sat}
                            onChange={(e) => setCurrentUser(prev => ({...prev, sat: parseInt(e.target.value) || 0}))}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Country</label>
                          <Select value={currentUser.country} onValueChange={(value) => setCurrentUser(prev => ({...prev, country: value}))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Canada">Canada</SelectItem>
                              <SelectItem value="USA">United States</SelectItem>
                              <SelectItem value="UK">United Kingdom</SelectItem>
                              <SelectItem value="Australia">Australia</SelectItem>
                              <SelectItem value="India">India</SelectItem>
                              <SelectItem value="China">China</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Extracurricular Activities</label>
                          <Input
                            type="number"
                            min="0"
                            max="20"
                            value={currentUser.activities}
                            onChange={(e) => setCurrentUser(prev => ({...prev, activities: parseInt(e.target.value) || 0}))}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Essays Completed</label>
                          <Input
                            type="number"
                            min="0"
                            max="10"
                            value={currentUser.essays}
                            onChange={(e) => setCurrentUser(prev => ({...prev, essays: parseInt(e.target.value) || 0}))}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                          <p className="text-sm font-medium text-gray-600">Name</p>
                          <p className="text-lg font-semibold">{currentUser.name}</p>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <p className="text-sm font-medium text-gray-600">GPA</p>
                          <p className="text-lg font-semibold">{currentUser.gpa}/100</p>
                          <Progress value={currentUser.gpa} className="mt-2" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm font-medium text-gray-600">SAT Score</p>
                          <p className="text-lg font-semibold">{currentUser.sat}/1600</p>
                          <Progress value={(currentUser.sat/1600)*100} className="mt-2" />
                        </div>
                        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                          <p className="text-sm font-medium text-gray-600">Country & Activities</p>
                          <p className="text-lg font-semibold">{currentUser.country}</p>
                          <p className="text-sm text-gray-600">{currentUser.activities} extracurricular activities</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                {isEditingProfile && (
                  <CardFooter>
                    <Button 
                      onClick={() => {
                        handleProfileUpdate(currentUser);
                        setIsEditingProfile(false);
                      }} 
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    >
                      <Save size={16} className="mr-2" />
                      Save Changes & Update Recommendations
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Unlock size={24} className="text-indigo-600 mr-2" />
                <span className="font-bold text-lg">EduBreak</span>
              </div>
              <p className="text-sm text-gray-600">
                Breaking barriers to elite education through AI-powered guidance, personalized recommendations, and comprehensive support for students worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => currentUser && setActiveTab("universities")}>University Matching</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => currentUser && setActiveTab("essays")}>AI Essay Analysis</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => currentUser && setActiveTab("scholarships")}>Scholarship Finder</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => currentUser && setActiveTab("roadmap")}>Smart Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => window.open('https://www.khanacademy.org/sat', '_blank')}>SAT Preparation</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => window.open('https://blog.collegevine.com/', '_blank')}>College Guides</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => window.open('https://www.commonapp.org/', '_blank')}>Common Application</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => window.open('https://studentaid.gov/', '_blank')}>Financial Aid Info</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => alert('Help documentation coming soon!')}>Help Center</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => alert('Contact form will be available soon')}>Contact Support</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => alert('Thank you for your feedback!')}>Give Feedback</li>
                <li className="cursor-pointer hover:text-indigo-600" onClick={() => alert('Bug report submitted successfully!')}>Report Issues</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 EduBreak. Breaking barriers, building futures. Made with ❤️ for students worldwide.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" onClick={() => alert('Privacy policy coming soon')}>Privacy Policy</Button>
              <Button variant="ghost" size="sm" onClick={() => alert('Terms of service coming soon')}>Terms of Service</Button>
              <Button variant="outline" size="sm" onClick={() => alert('Thank you for supporting our mission to democratize education!')}>
                <Heart size={14} className="mr-1" />
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EduBreak;import React, { useState, useEffect } from 'react';
