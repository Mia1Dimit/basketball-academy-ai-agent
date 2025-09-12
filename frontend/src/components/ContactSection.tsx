import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-basketball-blue to-basketball-blue/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Επικοινωνία
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Για περισσότερες πληροφορίες σχετικά με τις εγγραφές και τα προγράμματά μας
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-basketball-blue mb-6">
                Στοιχεία Επικοινωνίας
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-basketball-orange/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-basketball-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-basketball-blue mb-1">Τηλέφωνο</h4>
                    <p className="font-body text-gray-600">2710 123456</p>
                    <p className="font-body text-gray-600">6987 654321</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-basketball-orange/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-basketball-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-basketball-blue mb-1">Email</h4>
                    <p className="font-body text-gray-600">info@arkadikosbc.gr</p>
                    <p className="font-body text-gray-600">academy@arkadikosbc.gr</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-basketball-orange/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-basketball-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-basketball-blue mb-1">Γυμναστήριο</h4>
                    <p className="font-body text-gray-600">Κλειστό Γυμναστήριο Τρίπολης</p>
                    <p className="font-body text-gray-600">Κεντρικό Πάρκο, Τρίπολη 22100</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-basketball-orange/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-basketball-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-basketball-blue mb-1">Ώρες Γραφείου</h4>
                    <p className="font-body text-gray-600">Δευτέρα - Παρασκευή: 16:00 - 21:00</p>
                    <p className="font-body text-gray-600">Σάββατο: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-heading font-semibold text-basketball-blue mb-4">
                  Ακολουθήστε μας
                </h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="border-basketball-orange text-basketball-orange hover:bg-basketball-orange hover:text-white">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-basketball-orange text-basketball-orange hover:bg-basketball-orange hover:text-white">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-basketball-blue mb-6">
                Γρήγορη Επικοινωνία
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block font-body font-medium text-basketball-blue mb-2">
                    Όνομα
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-basketball-orange focus:border-transparent font-body"
                    placeholder="Το όνομά σας"
                  />
                </div>
                
                <div>
                  <label className="block font-body font-medium text-basketball-blue mb-2">
                    Τηλέφωνο
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-basketball-orange focus:border-transparent font-body"
                    placeholder="Το τηλέφωνό σας"
                  />
                </div>
                
                <div>
                  <label className="block font-body font-medium text-basketball-blue mb-2">
                    Κατηγορία Ενδιαφέροντος
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-basketball-orange focus:border-transparent font-body">
                    <option>Επιλέξτε κατηγορία</option>
                    <option>Παμπαίδων U12</option>
                    <option>Παίδων U14</option>
                    <option>Εφήβων U16</option>
                    <option>Νέων U18</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-body font-medium text-basketball-blue mb-2">
                    Μήνυμα
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-basketball-orange focus:border-transparent font-body resize-none"
                    placeholder="Πείτε μας περισσότερα για το ενδιαφέρον σας..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full font-heading text-lg py-3"
                >
                  Αποστολή Μηνύματος
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;