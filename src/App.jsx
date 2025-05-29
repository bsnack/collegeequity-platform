import React, { useState } from 'react';
import { 
  Calendar, BarChart3, Book, Users, GraduationCap, Search, CheckCircle, Clock, 
  FileText, Building, MapPin, DollarSign, Target, TrendingUp, Award, Lightbulb,
  MessageSquare, PenTool, Calculator, Globe, Star, ArrowRight, Zap, Brain,
  BookOpen, Trophy, Heart, Coins, School, Users2, CheckSquare, AlertCircle,
  User, Settings, LogIn, LogOut, Edit, Save, X
} from 'lucide-react';

// Custom UI Components
const Button = ({ children, onClick, variant = "default", size = "default", className = "", disabled = false, type = "button" }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
    ghost: "hover:bg-gray-100 text-gray-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Input = ({ type = "text", placeholder, value, onChange, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

const Textarea = ({ placeholder, value, onChange, className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
      {...props}
    />
  );
};

const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  
  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onValueChange(newValue);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      {React.Children.map(children, child => {
        if (child.type.name === 'SelectTrigger') {
          return React.cloneElement(child, { 
            onClick: () => setIsOpen(!isOpen),
            isOpen,
            selectedValue 
          });
        }
        if (child.type.name === 'SelectContent' && isOpen) {
          return React.cloneElement(child, { onSelect: handleSelect });
        }
        return null;
      })}
    </div>
  );
};

const SelectTrigger = ({ children, onClick, isOpen, selectedValue, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {selectedValue ? (
        React.Children.toArray(children).find(child => child.props?.value === selectedValue)?.props?.children || selectedValue
      ) : (
        children
      )}
      <svg className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

const SelectValue = ({ placeholder }) => {
  return <span className="text-gray-500">{placeholder}</span>;
};

const SelectContent = ({ children, onSelect }) => {
  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg">
      {React.Children.map(children, child => 
        React.cloneElement(child, { onSelect })
      )}
    </div>
  );
};

const SelectItem = ({ value, children, onSelect }) => {
  return (
    <div
      className="relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100 cursor-pointer"
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gray-900 text-gray-50 hover:bg-gray-900/80",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
    destructive: "bg-red-500 text-gray-50 hover:bg-red-500/80",
    outline: "text-gray-950 border border-gray-200"
  };
  
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const Progress = ({ value, className = "" }) => {
  return (
    <div className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-100 ${className}`}>
      <div 
        className="h-full w-full flex-1 bg-blue-600 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};

const Alert = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full rounded-lg border border-gray-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 ${className}`}>
      {children}
    </div>
  );
};

const AlertDescription = ({ children, className = "" }) => {
  return (
    <div className={`text-sm [&_p]:leading-relaxed ${className}`}>
      {children}
    </div>
  );
};

const Tabs = ({ children, value, onValueChange, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {React.Children.map(children, child => {
        if (child.type.name === 'TabsList') {
          return React.cloneElement(child, { activeTab: value, onTabChange: onValueChange });
        }
        if (child.type.name === 'TabsContent') {
          return React.cloneElement(child, { activeTab: value });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ children, activeTab, onTabChange, className = "" }) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, onTabChange })
      )}
    </div>
  );
};

const TabsTrigger = ({ children, value, activeTab, onTabChange, className = "" }) => {
  const isActive = activeTab === value;
  return (
    <button
      type="button"
      onClick={() => onTabChange(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-500 hover:text-gray-900'
      } ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ children, value, activeTab, className = "" }) => {
  if (activeTab !== value) return null;
  return (
    <div className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 ${className}`}>
      {children}
    </div>
  );
};

const CollegeEquity = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [region, setRegion] = useState("North America");
  const [searchTerm, setSearchTerm] = useState("");
  const [collegeFocus, setCollegeFocus] = useState("Ivy League");
  const [scholarshipFilters, setScholarshipFilters] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [essayDraft, setEssayDraft] = useState("");
  const [essayFeedback, setEssayFeedback] = useState(null);
  const [isAnalyzingEssay, setIsAnalyzingEssay] = useState(false);
  const [savedScholarships, setSavedScholarships] = useState([]);
  const [savedUniversities, setSavedUniversities] = useState([]);
  
  // User profile state
  const [userProfile, setUserProfile] = useState({
    name: "Student",
    email: "",
    gpa: 85,
    sat: 1450,
    activities: 3,
    essays: 1,
    country: "Canada",
    ethnicity: "",
    firstGen: false,
    financialNeed: false
  });
  
  const [tempProfile, setTempProfile] = useState({...userProfile});
  
  // Login credentials
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  
  // Comprehensive university database with international focus
  const universities = [
    { 
      name: "Harvard University", acceptanceRate: "3.4%", region: "North America", type: "Ivy League", 
      averageSAT: 1520, averageGPA: 95, tuition: "$56,000 USD", 
      programs: ["Computer Science", "Economics", "Biology", "Pre-Med", "Law"],
      scholarships: ["Need-Based Aid", "Merit Scholarships", "International Student Aid"],
      highlights: ["#1 Research University", "World-class Faculty", "Global Network"],
      difficulty: "Extremely Competitive",
      internationalFriendly: true
    },
    { 
      name: "University of Toronto", acceptanceRate: "43%", region: "North America", type: "Top 50", 
      averageSAT: 1350, averageGPA: 85, tuition: "$14,000 CAD",
      programs: ["Life Sciences", "Engineering", "Business", "Arts & Science"],
      scholarships: ["Lester B. Pearson", "National Scholarship Program", "Canadian Merit Awards"],
      highlights: ["Diverse Community", "Research Opportunities", "Affordable Excellence"],
      difficulty: "Competitive",
      internationalFriendly: true
    },
    { 
      name: "McGill University", acceptanceRate: "46%", region: "North America", type: "Top 50", 
      averageSAT: 1320, averageGPA: 82, tuition: "$12,000 CAD",
      programs: ["Medicine", "Engineering", "Business", "Liberal Arts"],
      scholarships: ["Entrance Scholarships", "International Student Awards"],
      highlights: ["Montreal Location", "Bilingual Environment", "Global Recognition"],
      difficulty: "Competitive",
      internationalFriendly: true
    },
    { 
      name: "University of British Columbia", acceptanceRate: "52%", region: "North America", type: "Top 50", 
      averageSAT: 1300, averageGPA: 80, tuition: "$13,500 CAD",
      programs: ["Computer Science", "Business", "Engineering", "Sciences"],
      scholarships: ["International Leader of Tomorrow", "Outstanding International Student Award"],
      highlights: ["Beautiful Campus", "Research Excellence", "International Community"],
      difficulty: "Competitive",
      internationalFriendly: true
    },
    { 
      name: "Stanford University", acceptanceRate: "3.9%", region: "North America", type: "Top 10", 
      averageSAT: 1505, averageGPA: 96, tuition: "$58,000 USD",
      programs: ["Engineering", "Computer Science", "Business", "Design", "Medicine"],
      scholarships: ["Knight-Hennessy Scholars", "International Student Aid"],
      highlights: ["Silicon Valley Location", "Innovation Hub", "Entrepreneurship"],
      difficulty: "Extremely Competitive",
      internationalFriendly: true
    },
    { 
      name: "MIT", acceptanceRate: "4.1%", region: "North America", type: "Top 10", 
      averageSAT: 1535, averageGPA: 98, tuition: "$57,000 USD",
      programs: ["Engineering", "Computer Science", "Physics", "Mathematics"],
      scholarships: ["Need-Blind Admission", "International Student Support"],
      highlights: ["Technology Leader", "Innovation Culture", "Hands-on Learning"],
      difficulty: "Extremely Competitive",
      internationalFriendly: true
    }
  ];
  
  // Enhanced scholarship database with Canadian/International focus
  const scholarships = [
    {
      name: "Lester B. Pearson International Scholarship",
      amount: "Full tuition + living expenses",
      deadline: "January 15",
      category: "International Students",
      requirements: ["International student", "Academic excellence", "Leadership", "Community impact"],
      description: "Full scholarship for exceptional international students at University of Toronto",
      location: "Canada",
      eligibility: "International"
    },
    {
      name: "Pierre Elliott Trudeau Foundation Scholarship",
      amount: "$60,000/year",
      deadline: "December 1",
      category: "Academic Excellence",
      requirements: ["Canadian/International", "Social sciences/humanities", "Leadership"],
      description: "For doctoral students in social sciences and humanities",
      location: "Canada",
      eligibility: "Canadian/International"
    },
    {
      name: "Gates Cambridge Scholarship",
      amount: "Full funding",
      deadline: "December 3",
      category: "International Students",
      requirements: ["Non-UK citizen", "Academic excellence", "Leadership potential"],
      description: "Full scholarship for graduate study at Cambridge University",
      location: "UK",
      eligibility: "International"
    },
    {
      name: "Mastercard Foundation Scholars Program",
      amount: "Full scholarship",
      deadline: "Various",
      category: "Minority Students",
      requirements: ["African heritage", "Financial need", "Leadership commitment"],
      description: "Comprehensive scholarship for African students",
      location: "Multiple",
      eligibility: "African students"
    },
    {
      name: "Jack Kent Cooke Foundation International",
      amount: "$40,000/year",
      deadline: "November 18",
      category: "Academic Excellence",
      requirements: ["Top 5% of class", "Financial need", "Leadership activities"],
      description: "For high-achieving students with financial need",
      location: "USA/International",
      eligibility: "International"
    },
    {
      name: "Vanier Canada Graduate Scholarships",
      amount: "$50,000/year",
      deadline: "November 1",
      category: "Academic Excellence",
      requirements: ["Canadian/International", "Doctoral studies", "Research excellence"],
      description: "For world-class doctoral students",
      location: "Canada",
      eligibility: "Canadian/International"
    },
    {
      name: "Rhodes Scholarship",
      amount: "Full funding",
      deadline: "October 1",
      category: "Leadership",
      requirements: ["Academic excellence", "Leadership", "Service commitment"],
      description: "Prestigious scholarship for study at Oxford University",
      location: "UK",
      eligibility: "Multiple countries"
    },
    {
      name: "QuestBridge International",
      amount: "Full ride",
      deadline: "September 26",
      category: "Low-Income Students",
      requirements: ["Low-income background", "Academic excellence", "First-generation"],
      description: "Full scholarships to top colleges for low-income students",
      location: "USA",
      eligibility: "International"
    }
  ];
  
  // Application milestones
  const milestones = [
    { 
      title: "College Research & List Building", 
      completed: true, 
      phase: "Research",
      dueDate: "12 months before",
      description: "Research universities, create target list, understand requirements"
    },
    { 
      title: "Standardized Test Preparation", 
      completed: false, 
      phase: "Testing",
      dueDate: "10 months before",
      description: "Prepare for and take SAT/ACT, consider retaking if needed"
    },
    { 
      title: "Essay Brainstorming & Drafting", 
      completed: false, 
      phase: "Essays",
      dueDate: "6 months before",
      description: "Brainstorm topics, write first drafts of personal statements"
    },
    { 
      title: "Recommendation Letter Requests", 
      completed: false, 
      phase: "Recommendations",
      dueDate: "4 months before",
      description: "Request letters from teachers, counselors, mentors"
    },
    { 
      title: "Application Completion & Submission", 
      completed: false, 
      phase: "Applications",
      dueDate: "2 months before",
      description: "Complete all applications, proofread, submit before deadlines"
    },
    { 
      title: "Financial Aid & Scholarship Applications", 
      completed: false, 
      phase: "Financial Aid",
      dueDate: "1 month before",
      description: "Complete FAFSA, CSS Profile, scholarship applications"
    }
  ];
  
  // AI Essay Analysis using simulated Claude API
  const analyzeEssayWithAI = async (text) => {
    setIsAnalyzingEssay(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      // Simulated AI analysis - in real implementation, this would call Claude API
      const feedback = {
        overallScore: Math.floor(Math.random() * 20) + 75, // 75-95 score
        strengths: [],
        improvements: [],
        specificSuggestions: [],
        structureAnalysis: "",
        contentAnalysis: ""
      };
      
      const wordCount = text.split(' ').length;
      const sentences = text.split(/[.!?]+/).length;
      const avgSentenceLength = wordCount / sentences;
      
      // Structure Analysis
      if (avgSentenceLength > 20) {
        feedback.improvements.push("Consider breaking up some longer sentences for better readability");
        feedback.structureAnalysis = "Your essay has complex sentence structures. While this shows sophistication, ensure clarity isn't sacrificed.";
      } else if (avgSentenceLength < 10) {
        feedback.improvements.push("Consider combining some shorter sentences for better flow");
        feedback.structureAnalysis = "Your writing style is clear and direct. Consider varying sentence length for more engaging prose.";
      } else {
        feedback.strengths.push("Well-balanced sentence structure throughout");
        feedback.structureAnalysis = "Excellent sentence variety and structure that maintains reader engagement.";
      }
      
      // Content Analysis
      const personalPronouns = (text.match(/\b(I|me|my|myself)\b/gi) || []).length;
      const personalityWords = (text.match(/\b(passion|dream|believe|feel|think|learn|grow|challenge|overcome)\b/gi) || []).length;
      
      if (personalPronouns > wordCount * 0.05) {
        feedback.contentAnalysis = "Strong personal voice comes through clearly. Your authentic perspective is evident.";
        feedback.strengths.push("Authentic personal narrative");
      } else {
        feedback.improvements.push("Consider adding more personal reflection and voice");
        feedback.contentAnalysis = "The essay could benefit from more personal insight and reflection.";
      }
      
      if (personalityWords > 5) {
        feedback.strengths.push("Rich emotional vocabulary that connects with readers");
      } else {
        feedback.improvements.push("Include more emotional depth and personal growth elements");
      }
      
      // Specific suggestions based on content
      if (text.toLowerCase().includes('challenge') || text.toLowerCase().includes('difficult')) {
        feedback.specificSuggestions.push("Great focus on challenges! Consider elaborating on what you learned from overcoming them.");
      }
      
      if (text.toLowerCase().includes('community') || text.toLowerCase().includes('volunteer')) {
        feedback.specificSuggestions.push("Your community involvement is valuable. Quantify your impact where possible.");
      }
      
      if (!text.toLowerCase().includes('future') && !text.toLowerCase().includes('goal')) {
        feedback.specificSuggestions.push("Consider connecting your experiences to your future goals and how college fits into your plans.");
      }
      
      // Length-based feedback
      if (wordCount < 400) {
        feedback.improvements.push("Essay may be too short - consider expanding on key points");
      } else if (wordCount > 650) {
        feedback.improvements.push("Essay may be too long - consider condensing to focus on most impactful elements");
      } else {
        feedback.strengths.push("Appropriate length for college application essay");
      }
      
      // General suggestions
      feedback.specificSuggestions.push(
        "Start with a compelling hook that draws readers in immediately",
        "Use specific examples and anecdotes rather than general statements",
        "Show your personality and what makes you unique",
        "End with a strong conclusion that ties back to your opening"
      );
      
      setEssayFeedback(feedback);
    } catch (error) {
      console.error('Essay analysis failed:', error);
      setEssayFeedback({
        error: "Analysis failed. Please try again later."
      });
    } finally {
      setIsAnalyzingEssay(false);
    }
  };
  
  // Calculate admission chances based on user profile
  const calculateChances = (university) => {
    const { gpa, sat } = userProfile;
    const targetGPA = university.averageGPA;
    const targetSAT = university.averageSAT;
    const baseAcceptance = parseFloat(university.acceptanceRate);
    
    let multiplier = 1;
    
    if (gpa >= targetGPA && sat >= targetSAT) {
      multiplier = 2.5;
    } else if (gpa >= targetGPA || sat >= targetSAT) {
      multiplier = 1.8;
    } else if (gpa >= targetGPA - 5 && sat >= targetSAT - 50) {
      multiplier = 1.3;
    }
    
    // Boost for Canadian students at Canadian universities
    if (userProfile.country === "Canada" && university.name.includes("Toronto") || university.name.includes("McGill") || university.name.includes("UBC")) {
      multiplier *= 1.2;
    }
    
    const chance = Math.min(baseAcceptance * multiplier, 85);
    return Math.round(chance * 10) / 10;
  };
  
  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setUserProfile(prev => ({ ...prev, email: loginData.email, name: loginData.email.split('@')[0] }));
    }
  };
  
  // Handle profile update
  const handleProfileUpdate = () => {
    setUserProfile(tempProfile);
    setIsEditingProfile(false);
  };
  
  // Handle scholarship save
  const toggleScholarshipSave = (scholarship) => {
    setSavedScholarships(prev => {
      const isAlreadySaved = prev.some(s => s.name === scholarship.name);
      if (isAlreadySaved) {
        return prev.filter(s => s.name !== scholarship.name);
      } else {
        return [...prev, scholarship];
      }
    });
  };
  
  // Handle university save
  const toggleUniversitySave = (university) => {
    setSavedUniversities(prev => {
      const isAlreadySaved = prev.some(u => u.name === university.name);
      if (isAlreadySaved) {
        return prev.filter(u => u.name !== university.name);
      } else {
        return [...prev, university];
      }
    });
  };
  
  // Filter functions
  const filteredUniversities = universities.filter(uni => 
    (region === "All Regions" || uni.region === region) && 
    (collegeFocus === "All Types" || uni.type === collegeFocus) &&
    (searchTerm === "" || uni.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const filteredScholarships = scholarships.filter(scholarship => {
    const categoryMatch = scholarshipFilters === "All" || scholarship.category === scholarshipFilters;
    const eligibilityMatch = userProfile.country === "Canada" ? 
      (scholarship.eligibility.includes("Canadian") || scholarship.eligibility.includes("International")) :
      scholarship.eligibility.includes("International") || scholarship.location === "Multiple";
    
    return categoryMatch && eligibilityMatch;
  });
  
  const completedMilestones = milestones.filter(m => m.completed).length;
  const progressPercentage = (completedMilestones / milestones.length) * 100;
  
  // Login Modal
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Login to CollegeEquity</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setShowLogin(false)}>
              <X size={16} />
            </Button>
          </div>
          <CardDescription>Access your personalized college guidance</CardDescription>
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
          <CardFooter>
            <Button type="submit" className="w-full">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {showLogin && <LoginModal />}
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-3">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">CollegeEquity</h1>
              <p className="text-blue-100 text-sm">Breaking down the $40,000+ consulting barrier - Get Ivy League-level guidance for free</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-3">
              <Badge variant="secondary" className="bg-green-500 text-white">
                <Zap size={14} className="mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-yellow-500 text-white">
                <Globe size={14} className="mr-1" />
                Global Access
              </Badge>
              <Badge variant="secondary" className="bg-purple-500 text-white">
                <Heart size={14} className="mr-1" />
                100% Free
              </Badge>
            </div>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm">Hi, {userProfile.name}!</span>
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)}>
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <Button variant="secondary" size="sm" onClick={() => setShowLogin(true)}>
                <LogIn size={16} className="mr-1" />
                Login
              </Button>
            )}
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto py-6 px-4 flex-grow">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-6 mb-6 bg-white shadow-md">
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
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Welcome to CollegeEquity, {userProfile.name}!</CardTitle>
                <CardDescription className="text-blue-100">
                  Democratizing elite education access through AI-powered guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <TrendingUp size={32} className="mx-auto mb-2" />
                    <p className="font-bold text-lg">6x Higher</p>
                    <p className="text-sm">Acceptance rates with proper guidance</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <DollarSign size={32} className="mx-auto mb-2" />
                    <p className="font-bold text-lg">$60k+</p>
                    <p className="text-sm">Higher lifetime earnings from elite schools</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <Globe size={32} className="mx-auto mb-2" />
                    <p className="font-bold text-lg">Global</p>
                    <p className="text-sm">Supporting students worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Your Profile Strength</CardTitle>
                  <Brain size={16} className="text-blue-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600">{Math.round((userProfile.gpa + userProfile.sat/20)/2)}%</p>
                  <Progress value={Math.round((userProfile.gpa + userProfile.sat/20)/2)} className="h-2 mt-2" />
                  <p className="text-xs text-gray-500 mt-2">Based on GPA and test scores</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Application Progress</CardTitle>
                  <CheckCircle size={16} className="text-green-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600">{Math.round(progressPercentage)}%</p>
                  <Progress value={progressPercentage} className="h-2 mt-2" />
                  <p className="text-xs text-gray-500 mt-2">{completedMilestones} of {milestones.length} milestones completed</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
                  <Calculator size={16} className="text-purple-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600">$65K</p>
                  <p className="text-xs text-gray-500 mt-2">vs. premium consulting services</p>
                  <p className="text-sm font-semibold text-green-600 mt-1">Using CollegeEquity: FREE</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Scholarships Found</CardTitle>
                  <Award size={16} className="text-orange-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-orange-600">{filteredScholarships.length}</p>
                  <p className="text-xs text-gray-500 mt-2">Matching your profile</p>
                  <p className="text-sm font-semibold text-green-600 mt-1">Explore opportunities</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 text-yellow-500" />
                    Smart Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {userProfile.sat < 1500 && (
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium">Improve SAT Score</p>
                        <p className="text-sm text-gray-600">Target: 1500+ for top schools</p>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => window.open('https://www.khanacademy.org/sat', '_blank')}>
                        Start Prep
                      </Button>
                    </div>
                  )}
                  {userProfile.essays < 3 && (
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium">Work on Essays</p>
                        <p className="text-sm text-gray-600">Use our AI essay assistant</p>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => setActiveTab("essays")}>
                        Write Now
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="font-medium">Apply for Scholarships</p>
                      <p className="text-sm text-gray-600">{filteredScholarships.length} opportunities available</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => setActiveTab("scholarships")}>
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 text-blue-500" />
                    Your Target Schools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {savedUniversities.length > 0 ? (
                      savedUniversities.slice(0, 3).map((uni, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{uni.name}</p>
                            <p className="text-sm text-gray-600">Admission chance: {calculateChances(uni)}%</p>
                          </div>
                          <div className="text-right">
                            <div className={`text-sm font-medium ${
                              calculateChances(uni) > 20 ? 'text-green-600' : 
                              calculateChances(uni) > 10 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {calculateChances(uni) > 20 ? 'Good Match' : 
                               calculateChances(uni) > 10 ? 'Reach' : 'High Reach'}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        <Building size={48} className="mx-auto mb-2 opacity-50" />
                        <p>No saved universities yet</p>
                        <Button size="sm" variant="outline" className="mt-2" onClick={() => setActiveTab("universities")}>
                          Browse Universities
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="universities" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Find Your Perfect Match</CardTitle>
                <CardDescription>Discover universities that align with your profile and goals</CardDescription>
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
                        <SelectItem value="Australia">Australia</SelectItem>
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
                const admissionChance = calculateChances(uni);
                const isSaved = savedUniversities.some(saved => saved.name === uni.name);
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{uni.name}</CardTitle>
                        <div className="flex flex-col gap-1">
                          <Badge variant={uni.type === "Ivy League" ? "destructive" : "secondary"}>
                            {uni.type}
                          </Badge>
                          {uni.internationalFriendly && (
                            <Badge variant="outline" className="text-xs">
                              <Globe size={10} className="mr-1" />
                              Int'l Friendly
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardDescription className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {uni.region}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-600">Acceptance Rate</p>
                          <p className="text-lg font-bold text-blue-600">{uni.acceptanceRate}</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
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
                          <p className="font-medium">Avg. SAT</p>
                          <p className="text-gray-600">{uni.averageSAT}</p>
                        </div>
                        <div>
                          <p className="font-medium">Avg. GPA</p>
                          <p className="text-gray-600">{uni.averageGPA}%</p>
                        </div>
                        <div>
                          <p className="font-medium">Tuition</p>
                          <p className="text-gray-600">{uni.tuition}</p>
                        </div>
                        <div>
                          <p className="font-medium">Difficulty</p>
                          <p className="text-gray-600">{uni.difficulty}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Top Programs</p>
                        <div className="flex flex-wrap gap-1">
                          {uni.programs.slice(0, 3).map((program, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Highlights</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {uni.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star size={12} className="mr-1 text-yellow-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="space-x-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(uni.name + ' university admission requirements')}`, '_blank')}
                      >
                        <FileText size={14} className="mr-1" />
                        Details
                      </Button>
                      <Button 
                        className={`flex-1 ${isSaved ? 'bg-red-500 hover:bg-red-600' : ''}`}
                        onClick={() => toggleUniversitySave(uni)}
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PenTool className="mr-2 text-blue-500" />
                    AI Essay Assistant
                  </CardTitle>
                  <CardDescription>
                    Get intelligent feedback on your personal statement - powered by advanced AI analysis
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
                        <SelectItem value="challenge">Describe a challenge you overcame</SelectItem>
                        <SelectItem value="passion">What are you passionate about?</SelectItem>
                        <SelectItem value="leadership">Describe a leadership experience</SelectItem>
                        <SelectItem value="diversity">How will you contribute to diversity?</SelectItem>
                        <SelectItem value="goals">What are your academic/career goals?</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Essay Draft</label>
                    <Textarea 
                      placeholder="Start writing your essay here. Our AI will analyze structure, content, and provide specific suggestions to help you improve..."
                      className="min-h-48 resize-none"
                      value={essayDraft}
                      onChange={(e) => setEssayDraft(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Word count: {essayDraft.split(' ').filter(word => word.length > 0).length} / 650 recommended
                    </p>
                  </div>
                  <Button 
                    onClick={() => analyzeEssayWithAI(essayDraft)}
                    className="w-full"
                    disabled={essayDraft.length < 100 || isAnalyzingEssay}
                  >
                    {isAnalyzingEssay ? (
                      <>
                        <Clock size={16} className="mr-2 animate-spin" />
                        Analyzing Essay...
                      </>
                    ) : (
                      <>
                        <Brain size={16} className="mr-2" />
                        Get AI Feedback
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Essay Feedback */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 text-green-500" />
                    AI Analysis Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {essayFeedback && !essayFeedback.error ? (
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                        <p className="text-3xl font-bold text-green-600">{essayFeedback.overallScore}/100</p>
                        <p className="text-sm text-gray-600">Overall Essay Score</p>
                      </div>
                      
                      {essayFeedback.structureAnalysis && (
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-600 mb-2">Structure Analysis</h4>
                          <p className="text-sm">{essayFeedback.structureAnalysis}</p>
                        </div>
                      )}
                      
                      {essayFeedback.contentAnalysis && (
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <h4 className="font-semibold text-purple-600 mb-2">Content Analysis</h4>
                          <p className="text-sm">{essayFeedback.contentAnalysis}</p>
                        </div>
                      )}
                      
                      {essayFeedback.strengths.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                            <CheckCircle size={16} className="mr-1" />
                            Strengths
                          </h4>
                          <ul className="space-y-1">
                            {essayFeedback.strengths.map((strength, idx) => (
                              <li key={idx} className="text-sm bg-green-50 p-2 rounded flex items-center">
                                <CheckCircle size={12} className="mr-2 text-green-500" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {essayFeedback.improvements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-2 flex items-center">
                            <AlertCircle size={16} className="mr-1" />
                            Areas for Improvement
                          </h4>
                          <ul className="space-y-1">
                            {essayFeedback.improvements.map((improvement, idx) => (
                              <li key={idx} className="text-sm bg-orange-50 p-2 rounded flex items-center">
                                <AlertCircle size={12} className="mr-2 text-orange-500" />
                                {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {essayFeedback.specificSuggestions.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                            <Lightbulb size={16} className="mr-1" />
                            Specific Suggestions
                          </h4>
                          <ul className="space-y-1">
                            {essayFeedback.specificSuggestions.slice(0, 4).map((suggestion, idx) => (
                              <li key={idx} className="text-sm bg-blue-50 p-2 rounded flex items-center">
                                <Lightbulb size={12} className="mr-2 text-blue-500" />
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : essayFeedback && essayFeedback.error ? (
                    <div className="text-center py-8 text-red-500">
                      <AlertCircle size={48} className="mx-auto mb-4" />
                      <p>{essayFeedback.error}</p>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <PenTool size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Write at least 100 words in your essay to get AI-powered feedback</p>
                      <p className="text-sm mt-2">Our AI analyzes structure, content, and style to provide personalized suggestions</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Essay Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Essay Writing Resources</CardTitle>
                <CardDescription>Comprehensive guides and examples to help you craft compelling essays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                       onClick={() => window.open('https://blog.collegevine.com/how-to-write-the-perfect-college-application-essay/', '_blank')}>
                    <BookOpen className="text-blue-500 mb-2" size={24} />
                    <h4 className="font-semibold mb-2">Personal Statement Guide</h4>
                    <p className="text-sm text-gray-600 mb-3">Step-by-step guide to writing compelling personal statements</p>
                    <Button variant="outline" size="sm" className="w-full">Read Guide</Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                       onClick={() => window.open('https://www.commonapp.org/blog/20-college-essay-examples', '_blank')}>
                    <FileText className="text-green-500 mb-2" size={24} />
                    <h4 className="font-semibold mb-2">Successful Essay Examples</h4>
                    <p className="text-sm text-gray-600 mb-3">Real essays that got students into top universities</p>
                    <Button variant="outline" size="sm" className="w-full">View Examples</Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                       onClick={() => window.open('https://www.youtube.com/results?search_query=college+essay+writing+tips', '_blank')}>
                    <Users className="text-purple-500 mb-2" size={24} />
                    <h4 className="font-semibold mb-2">Video Tutorials</h4>
                    <p className="text-sm text-gray-600 mb-3">Watch expert tutorials on essay writing techniques</p>
                    <Button variant="outline" size="sm" className="w-full">Watch Videos</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="scholarships" className="space-y-6">
            {/* Scholarship Search */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="mr-2 text-yellow-500" />
                  Scholarship Finder
                </CardTitle>
                <CardDescription>
                  Discover scholarships matching your profile - {userProfile.country === "Canada" ? "Canadian & International" : "International"} opportunities included
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
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Categories</SelectItem>
                      <SelectItem value="Academic Excellence">Academic Excellence</SelectItem>
                      <SelectItem value="Leadership">Leadership</SelectItem>
                      <SelectItem value="International Students">International Students</SelectItem>
                      <SelectItem value="Minority Students">Minority Students</SelectItem>
                      <SelectItem value="Low-Income Students">Low-Income Students</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredScholarships.map((scholarship, index) => {
                    const isSaved = savedScholarships.some(saved => saved.name === scholarship.name);
                    return (
                      <Card key={index} className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                            <div className="flex flex-col gap-1">
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                {scholarship.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <MapPin size={10} className="mr-1" />
                                {scholarship.location}
                              </Badge>
                            </div>
                          </div>
                          <CardDescription className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-green-600">{scholarship.amount}</span>
                            <span className="text-sm text-red-600 flex items-center">
                              <Clock size={12} className="mr-1" />
                              Due: {scholarship.deadline}
                            </span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-3">{scholarship.description}</p>
                          <div>
                            <p className="text-sm font-medium mb-2">Requirements:</p>
                            <ul className="text-xs space-y-1">
                              {scholarship.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-center">
                                  <CheckSquare size={12} className="mr-2 text-green-500" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-3">
                            <Badge variant="outline" className="text-xs">
                              Eligibility: {scholarship.eligibility}
                            </Badge>
                          </div>
                        </CardContent>
                        <CardFooter className="space-x-2">
                          <Button 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(scholarship.name + ' scholarship application')}`, '_blank')}
                          >
                            <FileText size={14} className="mr-1" />
                            Details
                          </Button>
                          <Button 
                            className={`flex-1 ${isSaved ? 'bg-red-500 hover:bg-red-600' : ''}`}
                            onClick={() => toggleScholarshipSave(scholarship)}
                          >
                            <Heart size={14} className="mr-1" />
                            {isSaved ? 'Unsave' : 'Save'}
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            {/* Saved Scholarships */}
            {savedScholarships.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Saved Scholarships</CardTitle>
                  <CardDescription>Keep track of scholarships you're interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {savedScholarships.map((scholarship, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-grow">
                          <h4 className="font-semibold">{scholarship.name}</h4>
                          <p className="text-sm text-gray-600">{scholarship.amount} • Due: {scholarship.deadline}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(scholarship.name + ' scholarship application')}`, '_blank')}
                          >
                            Apply
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => toggleScholarshipSave(scholarship)}
                          >
                            <X size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 text-blue-500" />
                  Your College Application Roadmap
                </CardTitle>
                <CardDescription>
                  Follow this proven timeline to maximize your admission chances
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-600">{completedMilestones}/{milestones.length} completed</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                </div>
                
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          milestone.completed 
                            ? 'bg-green-500 text-white' 
                            : index === completedMilestones 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-200 text-gray-500'
                        }`}>
                          {milestone.completed ? (
                            <CheckCircle size={16} />
                          ) : (
                            <span className="text-sm font-bold">{index + 1}</span>
                          )}
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className={`p-4 rounded-lg border-2 ${
                            milestone.completed 
                              ? 'border-green-200 bg-green-50' 
                              : index === completedMilestones 
                                ? 'border-blue-200 bg-blue-50' 
                                : 'border-gray-200 bg-gray-50'
                          }`}>
                            <div className="flex items-start justify-between">
                              <div className="flex-grow">
                                <h3 className="font-semibold text-lg">{milestone.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
                                <div className="flex items-center mt-2 space-x-4">
                                  <Badge variant="outline" className="text-xs">
                                    {milestone.phase}
                                  </Badge>
                                  <span className="text-xs text-gray-500 flex items-center">
                                    <Clock size={12} className="mr-1" />
                                    {milestone.dueDate}
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4">
                                {!milestone.completed && (
                                  <Button 
                                    size="sm" 
                                    variant={index === completedMilestones ? "default" : "outline"}
                                    onClick={() => {
                                      if (milestone.phase === "Essays") {
                                        setActiveTab("essays");
                                      } else if (milestone.phase === "Testing") {
                                        window.open('https://www.khanacademy.org/sat', '_blank');
                                      } else if (milestone.phase === "Financial Aid") {
                                        setActiveTab("scholarships");
                                      } else {
                                        setActiveTab("universities");
                                      }
                                    }}
                                  >
                                    {index === completedMilestones ? "Start Now" : "Learn More"}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="absolute left-4 top-12 w-0.5 h-6 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Timeline Customization */}
            <Card>
              <CardHeader>
                <CardTitle>Customize Your Timeline</CardTitle>
                <CardDescription>Adjust deadlines based on your target schools and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Application Deadline</label>
                    <Input type="date" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Target Schools</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select focus..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ivy">Ivy League Focus</SelectItem>
                        <SelectItem value="top50">Top 50 Universities</SelectItem>
                        <SelectItem value="balanced">Balanced Approach</SelectItem>
                        <SelectItem value="canadian">Canadian Universities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Priority</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early">Early Decision</SelectItem>
                        <SelectItem value="regular">Regular Decision</SelectItem>
                        <SelectItem value="rolling">Rolling Admission</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full mt-4" onClick={() => alert('Custom timeline generated! Check your email for details.')}>
                  <Calendar className="mr-2" size={16} />
                  Generate Custom Timeline
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-6">
            {/* User Profile Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <User className="mr-2 text-blue-500" />
                    Your Profile
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      if (isEditingProfile) {
                        setTempProfile(userProfile);
                      }
                      setIsEditingProfile(!isEditingProfile);
                    }}
                  >
                    {isEditingProfile ? (
                      <>
                        <X size={16} className="mr-1" />
                        Cancel
                      </>
                    ) : (
                      <>
                        <Edit size={16} className="mr-1" />
                        Edit
                      </>
                    )}
                  </Button>
                </CardTitle>
                <CardDescription>
                  Keep your profile updated to get personalized recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isEditingProfile ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <Input
                        value={tempProfile.name}
                        onChange={(e) => setTempProfile(prev => ({...prev, name: e.target.value}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input
                        type="email"
                        value={tempProfile.email}
                        onChange={(e) => setTempProfile(prev => ({...prev, email: e.target.value}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">GPA (out of 100)</label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={tempProfile.gpa}
                        onChange={(e) => setTempProfile(prev => ({...prev, gpa: parseInt(e.target.value) || 0}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">SAT Score</label>
                      <Input
                        type="number"
                        min="400"
                        max="1600"
                        value={tempProfile.sat}
                        onChange={(e) => setTempProfile(prev => ({...prev, sat: parseInt(e.target.value) || 0}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Country</label>
                      <Select value={tempProfile.country} onValueChange={(value) => setTempProfile(prev => ({...prev, country: value}))}>
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
                        value={tempProfile.activities}
                        onChange={(e) => setTempProfile(prev => ({...prev, activities: parseInt(e.target.value) || 0}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Essays Completed</label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        value={tempProfile.essays}
                        onChange={(e) => setTempProfile(prev => ({...prev, essays: parseInt(e.target.value) || 0}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Ethnicity (Optional)</label>
                      <Input
                        value={tempProfile.ethnicity}
                        onChange={(e) => setTempProfile(prev => ({...prev, ethnicity: e.target.value}))}
                        placeholder="e.g., Asian, Hispanic, African American"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={tempProfile.firstGen}
                          onChange={(e) => setTempProfile(prev => ({...prev, firstGen: e.target.checked}))}
                          className="mr-2"
                        />
                        First-generation college student
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={tempProfile.financialNeed}
                          onChange={(e) => setTempProfile(prev => ({...prev, financialNeed: e.target.checked}))}
                          className="mr-2"
                        />
                        Have financial need
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">Name</p>
                        <p className="text-lg font-semibold">{userProfile.name}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">GPA</p>
                        <p className="text-lg font-semibold">{userProfile.gpa}/100</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">SAT Score</p>
                        <p className="text-lg font-semibold">{userProfile.sat}</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">Country</p>
                        <p className="text-lg font-semibold">{userProfile.country}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">Activities</p>
                        <p className="text-lg font-semibold">{userProfile.activities} extracurriculars</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">Essays</p>
                        <p className="text-lg font-semibold">{userProfile.essays} completed</p>
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-600">Profile Status</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {userProfile.firstGen && <Badge variant="outline">First-Gen</Badge>}
                          {userProfile.financialNeed && <Badge variant="outline">Financial Need</Badge>}
                          {userProfile.ethnicity && <Badge variant="outline">{userProfile.ethnicity}</Badge>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              {isEditingProfile && (
                <CardFooter>
                  <Button onClick={handleProfileUpdate} className="w-full">
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              )}
            </Card>
            
            {/* Profile Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Insights & Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Academic Profile</h4>
                    <p className="text-sm">
                      Your GPA of {userProfile.gpa}/100 and SAT of {userProfile.sat} puts you in the 
                      {userProfile.gpa >= 90 && userProfile.sat >= 1450 ? ' top tier' : 
                       userProfile.gpa >= 80 && userProfile.sat >= 1350 ? ' competitive range' : 
                       ' developing category'} for college admissions.
                    </p>
                  </div>
                  
                  {userProfile.country === "Canada" && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Canadian Student Advantages</h4>
                      <p className="text-sm">
                        As a Canadian student, you have access to excellent domestic universities at lower costs, 
                        plus international opportunities. Consider both Canadian and international options.
                      </p>
                    </div>
                  )}
                  
                  {userProfile.firstGen && (
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">First-Generation Benefits</h4>
                      <p className="text-sm">
                        Many universities actively recruit first-generation students and offer specific support programs. 
                        This can be a significant advantage in your applications.
                      </p>
                    </div>
                  )}
                  
                  {userProfile.financialNeed && (
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Financial Aid Opportunities</h4>
                      <p className="text-sm">
                        Focus on need-blind schools and merit scholarships. Many top universities meet 100% of 
                        demonstrated financial need for admitted students.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-600 mr-2" />
                <span className="font-bold text-lg">CollegeEquity</span>
              </div>
              <p className="text-sm text-gray-600">
                Democratizing access to elite education through AI-powered guidance and comprehensive support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-blue-600" onClick={() => setActiveTab("universities")}>University Search</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => setActiveTab("essays")}>Essay Assistant</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => setActiveTab("scholarships")}>Scholarship Finder</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => setActiveTab("roadmap")}>Application Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-blue-600" onClick={() => window.open('https://www.khanacademy.org/sat', '_blank')}>SAT Prep</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => window.open('https://blog.collegevine.com/', '_blank')}>College Guides</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => window.open('https://www.commonapp.org/', '_blank')}>Common App</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => window.open('https://studentaid.gov/', '_blank')}>Financial Aid</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="cursor-pointer hover:text-blue-600" onClick={() => alert('Help center coming soon!')}>Help Center</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => alert('Contact form will open')}>Contact Us</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => alert('Bug report submitted!')}>Report Issue</li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => alert('Feedback form submitted!')}>Give Feedback</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 CollegeEquity. Breaking barriers, building futures.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" onClick={() => alert('Privacy policy opened')}>Privacy Policy</Button>
              <Button variant="ghost" size="sm" onClick={() => alert('Terms opened')}>Terms of Service</Button>
              <Button variant="outline" size="sm" onClick={() => alert('Thank you for supporting our mission!')}>
                <Heart size={14} className="mr-1" />
                Support Us
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollegeEquity;
