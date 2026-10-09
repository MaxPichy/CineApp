import { StyleSheet } from 'react-native';

// Colors
// #490068ff -> Purple
// #2d0040ff -> Dark Purple
// #058b8bff -> Blue
// #2c2a2dff -> Text
// #514c53ff -> Muted/Details
// #190124ff -> Default Background
// #f1e1f8ff -> Default Card Background

const styles = StyleSheet.create({
  // PAGES
  // General
  container: { flex: 1, backgroundColor: '#f7edfbff' },
  page: { padding: 16 },

  // Home
  home_body: {
    padding: 20,
    gap: 16,
    paddingBottom: 32,
  },
  home_banner: {
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#2d0040ff',
    shadowColor: '#058b8bff',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  home_icon: {
    fontSize: 56,
    marginBottom: 8,
  },
  home_title: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 44,
    fontWeight: 'bold',
    color: '#f1e1f8ff',
    letterSpacing: 2,
  },
  home_subtitle: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 14,
    color: '#058b8bff',
    marginTop: 6,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },

  // List
  list_title: {
    fontFamily: 'Times New Roman, sans-serif',
    alignSelf: 'center',
    fontSize: 40,
    color: '#2d0040ff',
    fontWeight: 'bold',
    lineHeight: 46,
    marginBottom: 15,
  },

  // About
  about_body: {
    padding: 20,
    gap: 16,
    paddingBottom: 32,
  },
  about_section: {
    backgroundColor: '#f1e1f8ff',
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#058b8bff',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: '#058b8bff',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  about_label: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#058b8bff',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 6,
  },
  about_title: {
    fontFamily: 'Times New Roman, sans-serif',
    alignSelf: 'center',
    fontSize: 40,
    color: '#2d0040ff',
    fontWeight: 'bold',
    lineHeight: 46,
  },
  about_text: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 16,
    color: '#2c2a2dff',
    lineHeight: 22,
  },

  // COMPONENTS
  // Button
  button_default: {
    backgroundColor: '#490068ff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button_secondary: {
    backgroundColor: '#058b8bff',
  },
  button_pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  button_text: {
    fontFamily: 'Times New Roman, sans-serif',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  // Menu
  menu_container: {
    flexDirection: 'row',
    backgroundColor: '#2d0040ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 3,
  },
  menu_item: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  menu_activeItem: {
    backgroundColor: '#490068ff',
  },
  menu_pressedItem: {
    transform: [{ scale: 0.95 }],
  },
  menu_text: {
    fontFamily: 'Times New Roman, sans-serif',
    color: '#ffffff',
    fontSize: 20,
  },
  menu_activeText: {
    fontWeight: 'bold',
  },

  // MovieCard
  mc_card: {
    backgroundColor: '#f1e1f8ff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
    elevation: 3,
    borderLeftWidth: 3,
    borderLeftColor: '#058b8bff',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: '#058b8bff',
    shadowOffset: { width: 0, height: 2 },
  },
  mc_favIcon: {
    position: 'absolute',
    top: 8,
    right: 12,
    fontSize: 24,
    color: '#058b8bff',
    zIndex: 10,
  },
  mc_content: {
    padding: 12,
  },
  mc_topRow: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 28,
  },
  mc_pressedContent: {
    backgroundColor: '#f1e1f8ff',
  },
  mc_image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#f1e1f8ff',
  },
  mc_info: {
    flex: 1,
  },
  mc_titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  mc_title: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 20,
    fontWeight: '700',
    color: '#2d0040ff',
  },
  mc_rate: {
    fontSize: 12,
    color: '#058b8bff',
    fontWeight: '700',
    marginTop: 7,
    flexShrink: 0,
  },
  mc_details: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 14,
    color: '#514c53ff',
    marginTop: 8,
  },
  mc_review: {
    fontFamily: 'Times New Roman, sans-serif',
    fontSize: 13,
    color: '#2c2a2dff',
    marginTop: 10,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  mc_status: {
    marginTop: 6,
    color: '#058b8bff',
    fontWeight: '600',
  },
  mc_buttonArea: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});

export default styles;
