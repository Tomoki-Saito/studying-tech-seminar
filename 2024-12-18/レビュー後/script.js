// メニューの開閉
const menuButton = document.getElementById('menuButton')
const mainNav = document.getElementById('mainNav')

menuButton.addEventListener('click', function () {
  mainNav.classList.toggle('hidden')
})

// プロジェクトセクションへのスクロール
function scrollToProjects() {
  const projectsSection = document.getElementById('projects')
  projectsSection.scrollIntoView({ behavior: 'smooth' })
}

// フォームの送信処理
const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const formData = new FormData(contactForm)
  // ここでフォームデータの処理を行う
  console.log('フォームが送信されました')
})
