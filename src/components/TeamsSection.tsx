import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Clock } from "lucide-react";

const teams = [
  {
    category: "Παμπαίδων U12",
    ageGroup: "8-12 ετών",
    gender: ["Αγόρια", "Κορίτσια"],
    schedule: "Δευτέρα & Τετάρτη 17:00-18:30",
    description: "Εισαγωγή στο μπάσκετ με παιχνίδι και διασκέδαση"
  },
  {
    category: "Παίδων U14", 
    ageGroup: "12-14 ετών",
    gender: ["Αγόρια", "Κορίτσια"],
    schedule: "Τρίτη & Πέμπτη 17:00-18:30",
    description: "Ανάπτυξη βασικών τεχνικών και τακτικών"
  },
  {
    category: "Εφήβων U16",
    ageGroup: "14-16 ετών", 
    gender: ["Αγόρια", "Κορίτσια"],
    schedule: "Δευτέρα & Τετάρτη 18:30-20:00",
    description: "Προηγμένες τεχνικές και συμμετοχή σε πρωταθλήματα"
  },
  {
    category: "Νέων U18",
    ageGroup: "16-18 ετών",
    gender: ["Αγόρια", "Κορίτσια"], 
    schedule: "Τρίτη & Πέμπτη 18:30-20:00",
    description: "Προετοιμασία για ανδρικό/γυναικείο μπάσκετ"
  }
];

const TeamsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-basketball-blue mb-4">
            Διαθέσιμες Ομάδες
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Προσφέρουμε προγράμματα για όλες τις ηλικίες, από αρχάριους έως προχωρημένους αθλητές
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-basketball-orange to-basketball-blue"></div>
              
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl text-basketball-blue flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-basketball-orange" />
                  {team.category}
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">{team.ageGroup}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {team.gender.map((gender) => (
                    <Badge 
                      key={gender}
                      variant="secondary" 
                      className="bg-basketball-orange/10 text-basketball-orange font-medium"
                    >
                      <Users className="w-3 h-3 mr-1" />
                      {gender}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-basketball-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 font-medium">{team.schedule}</p>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {team.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;