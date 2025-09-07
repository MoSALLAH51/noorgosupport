import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Image */}
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Noor%20Go%2FFeature%20Graphic.png?alt=media&token=20bed5d8-7855-4b14-8eb7-a6b2e85b3b0e" 
            alt="App Logo" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            الدعم الفني
          </h1>
          <h2 className="text-lg text-center text-gray-600 mb-8">
            Technical Support
          </h2>
          
          {/* Support Contact Info */}
          <div className="space-y-6">
            {/* Phone Support */}
            <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="phone-icon">📞</div>
              <div>
                <p className="text-sm text-gray-600 mb-1">اتصل بنا</p>
                <p className="text-lg font-semibold text-gray-800" dir="ltr">
                  +963935819204
                </p>
              </div>
            </div>
            
            {/* Email Support */}
            <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="email-icon">✉️</div>
              <div>
                <p className="text-sm text-gray-600 mb-1">راسلنا</p>
                <p className="text-lg font-semibold text-gray-800" dir="ltr">
                  paradox@noor-app.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Support Hours */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2 text-center">
              أوقات العمل
            </h3>
            <p className="text-sm text-gray-600 text-center">
              الأحد - الخميس: 9:00 ص - 6:00 م
            </p>
            <p className="text-sm text-gray-600 text-center">
              Sun - Thu: 9:00 AM - 6:00 PM (GST)
            </p>
          </div>
          
          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              نحن هنا لمساعدتك في أي وقت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;