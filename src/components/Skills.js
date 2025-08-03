import React from 'react';

const Skills = () => {
const skills = [
  { name: 'Flutter Development (Dart)', level: 95 },
  { name: 'State Management (Riverpod, Provider, BLoC)', level: 90 },
  { name: 'Firebase (Auth, Firestore, Realtime DB)', level: 90 },
  { name: 'FlutterFlow', level: 85 },
  { name: 'REST API Integration (Dio/HTTP)', level: 90 },
  { name: 'UI/UX Design (Material/Cupertino)', level: 85 },
  { name: 'Hive / SQLite / Shared Preferences', level: 80 },
  { name: 'App Architecture (MVVM, Clean Architecture)', level: 85 },
  { name: 'Push Notifications (FCM + Local)', level: 85 },
  { name: 'Animations (Implicit/Explicit, Rive, Lottie)', level: 80 },
  { name: 'Responsive & Adaptive UI', level: 90 },
  { name: 'Testing (Unit, Widget, Integration)', level: 80 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'CI/CD & Automation', level: 80 },
  { name: 'Performance Optimization', level: 75 },
  { name: 'Package Publishing (pub.dev)', level: 70 },
  { name: 'JavaScript / HTML / CSS', level: 75 },

];


const tools = [
  'Android Studio',
  'Xcode',
  'Visual Studio Code',
  'Git/GitHub',
  'Figma',
  'Firebase Console',
  'Flutter DevTools',
  'Google AdMob',
  'Postman / Thunder Client',
  'Codemagic / Bitrise (CI/CD)',
  'Dart DevTools',
  'Chrome DevTools (for Flutter Web)',
  'LottieFiles',
  'App Store Connect',
  'Google Play Console',
  'Fastlane (for deployment)',
  'Firebase Crashlytics',
  'Firebase Analytics',
  'OneSignal (Push Notifications)',
  'Rive Editor (Animations)',
];


  return (
    <section id="skills" className="skills py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">My Skills</h2>

        <div className="skills-grid grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="skills-category">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="skill-bars space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-2 bg-gray-300 rounded">
                    <div
                      className="skill-progress h-full bg-blue-600 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="skills-category">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="tools-grid grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="tool-item bg-white shadow p-3 rounded text-center font-medium"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
